import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getSection, getTopic } from '../../content/course.repository';
import { ProgressService } from '../../core/services/progress.service';
import { Answer, Question } from '../../core/models/learning.models';

@Component({
  selector: 'app-practice',
  imports: [RouterLink],
  template: `
    @if (topic(); as t) {
      @if (section(); as s) {
        <div class="page">
          <a [routerLink]="['/tema', t.id]">← Volver al tema</a>
          <header><small>🎯 PRACTICAR</small><h1>{{ s.title }}</h1></header>

          @if (questions().length === 0) {
            <div class="empty"><span>🛠️</span><h2>Banco de ejercicios preparado</h2><p>Esta sección ya forma parte de la arquitectura. Falta incorporar sus preguntas específicas del temario completo.</p><a [routerLink]="['/tema',t.id,'aprender',s.id]">Repasar teoría</a></div>
          } @else if (!finished()) {
            @if (currentQuestion(); as question) {
              <div class="status"><span>Pregunta {{ index()+1 }} de {{ questions().length }}</span><span>{{ score() }} puntos</span></div>
              <div class="bar"><i [style.width.%]="((index()+1)/questions().length)*100"></i></div>
              <article class="question">
                <h2>{{ question.question }}</h2>
                @if (question.hint && !selected()) { <p class="hint">💡 {{ question.hint }}</p> }
                <div class="answers">
                  @for (answer of shuffledAnswers(question); track answer.id) {
                    <button [disabled]="!!selected()" [class.correct]="selected() && answer.correct" [class.wrong]="selected()?.id === answer.id && !answer.correct" (click)="answerQuestion(answer)">
                      {{ answer.text }}
                    </button>
                  }
                </div>
                @if (selected()) {
                  <div class="feedback"><strong>{{ selected()?.correct ? '¡Muy bien! 🌟' : 'Casi. Seguimos aprendiendo 💙' }}</strong><p>{{ question.explanation }}</p></div>
                  <button class="next" (click)="next()">{{ index()+1 === questions().length ? 'Ver resultado' : 'Siguiente →' }}</button>
                }
              </article>
            }
          } @else {
            <div class="result"><span>🏆</span><h2>{{ percentage() }}%</h2><h3>{{ percentage() >= 70 ? '¡Sección superada!' : 'Repasa un poco y vuelve a intentarlo' }}</h3><p>Has conseguido {{ score() }} de {{ questions().length * 10 }} puntos.</p><a [routerLink]="['/tema',t.id]">Volver al tema</a></div>
          }
        </div>
      }
    }
  `,
  styleUrl: './practice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PracticeComponent {
  readonly topicId = input.required<string>();
  readonly sectionId = input.required<string>();
  readonly topic = computed(() => getTopic(this.topicId()));
  readonly section = computed(() => getSection(this.topicId(), this.sectionId()));
  readonly questions = computed(() => this.section()?.questions ?? []);
  readonly index = signal(0);
  readonly score = signal(0);
  readonly selected = signal<Answer | null>(null);
  readonly finished = signal(false);
  readonly percentage = computed(() => this.questions().length ? Math.round(this.score() / (this.questions().length * 10) * 100) : 0);
  readonly currentQuestion = computed(() => this.questions()[this.index()]);
  private readonly progress = inject(ProgressService);
  private readonly answerOrder = new Map<string, Answer[]>();

  shuffledAnswers(question: Question): Answer[] {
    const cached = this.answerOrder.get(question.id);
    if (cached) return cached;
    const answers = [...question.answers].sort(() => Math.random() - .5);
    this.answerOrder.set(question.id, answers);
    return answers;
  }

  answerQuestion(answer: Answer): void {
    if (this.selected()) return;
    this.selected.set(answer);
    if (answer.correct) this.score.update(v => v + 10);
  }

  next(): void {
    if (this.index() + 1 >= this.questions().length) {
      this.finished.set(true);
      this.progress.saveResult(this.topicId(), this.sectionId(), this.percentage());
      return;
    }
    this.index.update(v => v + 1);
    this.selected.set(null);
  }
}
