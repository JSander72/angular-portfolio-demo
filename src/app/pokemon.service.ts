
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // existing:
  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${name}`);
  }

  // new: list with pagination
  getPokemonList(limit = 10, offset = 0): Observable<{
    count: number;
    items: { id: number; name: string; image: string }[];
  }> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}?limit=${limit}&offset=${offset}`).pipe(
      map((res) => {
        const items = res.results.map((r) => {
          // extract id from URL: e.g. https://pokeapi.co/api/v2/pokemon/25/
          const id = Number(r.url.split('/').filter(Boolean).pop());
          // use the well-known sprite CDN for quick images:
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          return { id, name: r.name, image };
        });
        return { count: res.count, items };
      })
    );
  }

  // optional: bulk fetch detail for selected ids
  getMany(ids: number[]): Observable<any[]> {
    const calls = ids.map((id) => this.http.get(`${this.apiUrl}/${id}`));
    return forkJoin(calls);
  }
}
