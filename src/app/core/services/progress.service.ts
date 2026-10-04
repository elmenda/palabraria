import { Injectable, computed, signal } from '@angular/core';
import { SectionProgress } from '../models/learning.models';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly storageKey = 'palabraria-progress-v1';
  private readonly state = signal<SectionProgress[]>(this.load());

  readonly progress = this.state.asReadonly();
  readonly completedCount = computed(() => this.state().filter(p => p.completed).length);

  get(topicId: string, sectionId: string): SectionProgress | undefined {
    return this.state().find(p => p.topicId === topicId && p.sectionId === sectionId);
  }

  saveResult(topicId: string, sectionId: string, score: number): void {
    const current = this.state();
    const previous = current.find(p => p.topicId === topicId && p.sectionId === sectionId);
    const next: SectionProgress = {
      topicId, sectionId,
      bestScore: Math.max(previous?.bestScore ?? 0, score),
      attempts: (previous?.attempts ?? 0) + 1,
      completed: score >= 70 || previous?.completed === true
    };
    const updated = [...current.filter(p => !(p.topicId === topicId && p.sectionId === sectionId)), next];
    this.state.set(updated);
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
  }

  private load(): SectionProgress[] {
    try { return JSON.parse(localStorage.getItem(this.storageKey) ?? '[]') as SectionProgress[]; }
    catch { return []; }
  }
}
