import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-shell">
      <header class="app-header">
        <div class="brand">
          <span class="brand-badge" aria-hidden="true">APD</span>
          <h1 class="app-title">Angular Portfolio Demo</h1>
        </div>
        <nav class="app-nav" aria-label="Primary">
          <a
            routerLink="/dashboard"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-link"
          >
            PokéDashboard
          </a>
        </nav>
      </header>

      <main class="app-main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrl: './app.css'
})
export class App {}
