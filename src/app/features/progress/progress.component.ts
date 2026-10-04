import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../core/services/progress.service';
import { getTopic } from '../../content/course.repository';

@Component({
  selector: 'app-progress',
  imports: [RouterLink],
  template: `
    <div class="page">
      <a routerLink="/">← Inicio</a>
      <h1>Mi progreso ⭐</h1>
      <p>Cada práctica superada con un 70% o más queda marcada como dominada.</p>
      @if (progress.progress().length === 0) {
        <div class="empty">Todavía no has realizado ninguna práctica. ¡Elige un tema y empieza! 🚀</div>
      } @else {
        <div class="list">
          @for (item of progress.progress(); track item.topicId + item.sectionId) {
            <article>
              <div><small>{{ getTopicTitle(item.topicId) }}</small><h2>{{ getSectionTitle(item.topicId,item.sectionId) }}</h2><p>{{ item.attempts }} intento(s)</p></div>
              <strong>{{ item.bestScore }}% {{ item.completed ? '⭐' : '' }}</strong>
            </article>
          }
        </div>
      }
    </div>
  `,
  styles: [`.page{max-width:900px;margin:auto;padding:3rem 1rem}.page>a{color:var(--blue-700);font-weight:900}h1{font-size:3rem;margin-bottom:.2rem}.page>p{color:var(--muted)}.empty,article{background:white;border:1px solid #dcecff;border-radius:18px;padding:1.2rem;margin-top:1rem}article{display:flex;justify-content:space-between;align-items:center}small{color:var(--blue-700);font-weight:900}h2{margin:.2rem 0}article p{margin:0;color:var(--muted)}article strong{font-size:1.5rem;color:var(--blue-900)}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent {
  readonly progress = inject(ProgressService);
  getTopicTitle(id: string): string { return getTopic(id)?.title ?? id; }
  getSectionTitle(topicId: string, sectionId: string): string {
    return getTopic(topicId)?.sections.find(s => s.id === sectionId)?.title ?? sectionId;
  }
}
