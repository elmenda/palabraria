import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'tema/:topicId',
    loadComponent: () => import('./features/topic/topic.component').then(m => m.TopicComponent)
  },
  {
    path: 'tema/:topicId/aprender/:sectionId',
    loadComponent: () => import('./features/learn/learn.component').then(m => m.LearnComponent)
  },
  {
    path: 'tema/:topicId/practicar/:sectionId',
    loadComponent: () => import('./features/practice/practice.component').then(m => m.PracticeComponent)
  },
  {
    path: 'progreso',
    loadComponent: () => import('./features/progress/progress.component').then(m => m.ProgressComponent)
  },
  { path: '**', redirectTo: '' }
];
