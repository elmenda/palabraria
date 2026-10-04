import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="topbar">
      <a routerLink="/" class="brand" aria-label="Ir al inicio">
        <span class="brand__mark">P</span>
        <span><strong>Palabraria</strong><small>4.0 · Lengua 4º Primaria</small></span>
      </a>
      <a routerLink="/progreso" class="progress-link">Mi progreso ⭐</a>
    </header>
    <main><router-outlet /></main>
  `,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
