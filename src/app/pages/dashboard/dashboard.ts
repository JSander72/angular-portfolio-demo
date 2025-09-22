import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../pokemon.service';

type PokemonRow = { id: number; name: string; image: string };

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  rows: PokemonRow[] = [];
  filtered: PokemonRow[] = [];
  loading = false;
  error = '';
  search = '';

  // paging
  limit = 10;
  offset = 0;
  total = 0;

  // keep existing Pokemon search functionality
  pokemonName: string = '';
  pokemon: any;

  // expose Math to template
  Math = Math;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.pokemonService.getPokemonList(this.limit, this.offset).subscribe({
      next: (res) => {
        this.total = res.count;
        this.rows = res.items;
        this.applyFilter();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load Pokémon. Try again.';
        this.loading = false;
      },
    });
  }

  applyFilter(): void {
    const q = this.search.trim().toLowerCase();
    this.filtered = !q ? this.rows : this.rows.filter((r) => r.name.toLowerCase().includes(q));
  }

  onSearchChange(): void {
    this.applyFilter();
  }

  next(): void {
    if (this.offset + this.limit < this.total) {
      this.offset += this.limit;
      this.load();
    }
  }

  prev(): void {
    if (this.offset - this.limit >= 0) {
      this.offset -= this.limit;
      this.load();
    }
  }

  // optional: click row → fetch details later
  view(r: PokemonRow): void {
    // router to /pokemon/:id if you add a detail page
    console.log('View', r);
  }

  // existing Pokemon search functionality
  searchPokemon() {
    this.pokemonService.getPokemon(this.pokemonName.toLowerCase()).subscribe({
      next: (data) => (this.pokemon = data),
      error: () => (this.pokemon = null)
    });
  }
}
