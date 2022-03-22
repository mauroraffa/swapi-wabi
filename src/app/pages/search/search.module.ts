import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { SearchPageRoutingModule } from './search.routing';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SearchPageRoutingModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [],
})
export class SearchModule { }
