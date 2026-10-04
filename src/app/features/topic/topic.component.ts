import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getTopic } from '../../content/course.repository';
import { ProgressService } from '../../core/services/progress.service';

@Component({
  selector: 'app-topic',
  imports: [RouterLink],
  template: `
    @if (topic(); as current) {
      <section class="topic-hero">
        <a routerLink="/">← Todos los temas</a>
        <div class="hero-row"><span>{{ current.emoji }}</span><div><small>TEMA {{ current.order }}</small><h1>{{ current.title }}</h1><p>{{ current.description }}</p></div></div>
      </section>
      <section class="sections">
        <h2>Estudia paso a paso</h2>
        <p class="lead">Entra en una sección para aprender la teoría y después practicar.</p>
        <div class="grid">
          @for (section of current.sections; track section.id; let i = $index) {
            <article>
              <div class="icon">{{ section.emoji }}</div>
              <div class="section-number">PASO {{ i + 1 }}</div>
              <h3>{{ section.title }}</h3>
              <p>{{ section.subtitle }}</p>
              @if (progress.get(current.id, section.id); as p) {
                <div class="score">Mejor resultado: {{ p.bestScore }}% {{ p.completed ? '⭐' : '' }}</div>
              }
              <div class="actions">
                <a [routerLink]="['/tema', current.id, 'aprender', section.id]">
                  {{ section.kind === 'reading' ? '📖 Leer' : (section.kind === 'writing' || section.kind === 'communication' ? '✍️ Actividad' : '📘 Aprender') }}
                </a>
                @if (section.questions.length > 0) {
                  <a class="practice" [routerLink]="['/tema', current.id, 'practicar', section.id]">
                    {{ section.kind === 'reading' ? '🧠 Comprensión' : '🎯 Practicar' }}
                  </a>
                }
              </div>
            </article>
          }
        </div>
      </section>
    }
  `,
  styleUrl: './topic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicComponent {
  readonly topicId = input.required<string>();
  readonly topic = computed(() => getTopic(this.topicId()));
  readonly progress = inject(ProgressService);
}
