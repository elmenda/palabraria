import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getTopics } from '../../content/course.repository';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div>
        <span class="eyebrow">LENGUA · 4º DE PRIMARIA</span>
        <h1>Las palabras tienen<br><em>superpoderes.</em></h1>
        <p>Aprende Lengua poco a poco: estudia cada sección, practica y demuestra todo lo que sabes.</p>
      </div>
      <div class="hero-card">Aa<span>✏️</span></div>
    </section>

    <section class="content">
      <div class="section-title">
        <div><span>📘 TU CURSO</span><h2>Elige un tema</h2></div>
        <p>Todo el curso organizado paso a paso</p>
      </div>
      <div class="topics">
        @for (topic of topics; track topic.id) {
          <a class="topic-card" [routerLink]="['/tema', topic.id]">
            <div class="number">{{ topic.order }}</div>
            <div class="emoji">{{ topic.emoji }}</div>
            <div class="info"><small>{{ topic.order === 0 ? 'PARA EMPEZAR' : 'TEMA ' + topic.order }}</small><h3>{{ topic.title }}</h3><p>{{ topic.description }}</p></div>
            <div class="arrow">→</div>
          </a>
        }
      </div>
    </section>
  `,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent { readonly topics = getTopics(); }
