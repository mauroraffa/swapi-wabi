import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterComponent } from './character.component';
import { CharacterPageRoutingModule } from './character.routing';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    FormsModule,
    CharacterPageRoutingModule,
    SharedModule,
    ComponentsModule,
  ],
  providers: [],
})
export class CharacterModule {}
