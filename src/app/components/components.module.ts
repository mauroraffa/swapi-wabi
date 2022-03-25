import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components
import { CardComponent } from './card/card.component';
import { CardCharacterComponent } from './cardCharacter/cardCharacter.component';
import { FilmComponent } from './film/film.component';
import { HeadboardComponent } from './headboard/headboard.component';
import { HeaderComponent } from './header/header.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SearchTextComponent } from './search/search-text.component';
import { YodaComponent } from './yoda/yoda.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    CardComponent,
    CardCharacterComponent,
    FilmComponent,
    HeaderComponent,
    YodaComponent,
    SearchTextComponent,
    HeadboardComponent,
    PaginatorComponent,
  ],
  exports: [
    CardComponent,
    CardCharacterComponent,
    FilmComponent,
    HeaderComponent,
    YodaComponent,
    SearchTextComponent,
    HeadboardComponent,
    PaginatorComponent,
  ],
  entryComponents: [
    CardComponent,
    CardCharacterComponent,
    FilmComponent,
    HeaderComponent,
    YodaComponent,
    SearchTextComponent,
    HeadboardComponent,
    PaginatorComponent,
  ],
})
export class ComponentsModule {}
