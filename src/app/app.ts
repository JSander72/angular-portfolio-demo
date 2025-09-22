import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div style="text-align:center; margin-top: 40px;">
      <h1>Angular Portfolio Demo</h1>
      <nav style="display:flex; gap:1rem; align-items:center; padding:1rem; border-bottom:1px solid #eee;">
        <a routerLink="/dashboard" style="text-decoration:none; font-weight:600;">PokéDashboard</a>
      </nav>

      <main style="padding:1rem;">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-portfolio-demo');
}
