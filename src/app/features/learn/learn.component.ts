import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getSection, getTopic } from '../../content/course.repository';

@Component({
  selector: 'app-learn',
  imports: [RouterLink],
  template: `
    @if (topic(); as t) {
      @if (section(); as s) {
        <div class="page">
          <a [routerLink]="['/tema', t.id]">← Volver al tema</a>
          <header><span>{{ s.emoji }}</span><div><small>APRENDER</small><h1>{{ s.title }}</h1><p>{{ s.subtitle }}</p></div></header>
          <div class="lesson">
            @for (block of s.theory; track $index) {
              <section [class]="'block ' + block.type">
                @if (block.title) { <h2>{{ block.title }}</h2> }
                @if (block.text) { <p>{{ block.text }}</p> }
                @if (block.items) { <ul>@for (item of block.items; track item) { <li>{{ item }}</li> }</ul> }
              </section>
            }
          </div>
          @if (s.questions.length > 0) {
            <a class="cta" [routerLink]="['/tema', t.id, 'practicar', s.id]">
              {{ s.kind === 'reading' ? 'He terminado de leer · Comprensión 🧠' : 'Ya lo he estudiado · Practicar 🎯' }}
            </a>
          }
        </div>
      }
    }
  `,
  styleUrl: './learn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearnComponent {
  readonly topicId = input.required<string>();
  readonly sectionId = input.required<string>();
  readonly topic = computed(() => getTopic(this.topicId()));
  readonly section = computed(() => getSection(this.topicId(), this.sectionId()));
}
