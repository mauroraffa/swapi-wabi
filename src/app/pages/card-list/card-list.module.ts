import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardListComponent } from './card-list.component';
import { CardListRoutingModule } from './card-list.routing';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({
  declarations: [CardListComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardListRoutingModule,
    SharedModule,
    ComponentsModule,
  ],
  providers: [],
})
export class CardListModule {}
