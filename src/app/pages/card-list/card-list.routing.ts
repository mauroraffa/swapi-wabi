import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list.component';

const routes: Routes = [
  {
    path: '',
    component: CardListComponent,
  },
  {
    path: 'character/:id',
    loadChildren: () =>
      import('../character/character.module').then((m) => m.CharacterModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardListRoutingModule {}
