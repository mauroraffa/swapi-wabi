import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const commonsRoutes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/card-list/card-list.module').then(
        (m) => m.CardListModule
      ),
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/search' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(commonsRoutes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
