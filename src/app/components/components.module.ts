import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components
import { CardComponent } from './card/card.component';
import { CardCharacterComponent } from './cardCharacter/cardCharacter.component';
import { FilmComponent } from './film/film.component';
import { HeaderComponent } from './header/header.component';
import { YodaComponent } from './yoda/yoda.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    CardComponent,
    CardCharacterComponent,
    FilmComponent,
    HeaderComponent,
    YodaComponent,
  ],
  exports: [
    CardComponent,
    CardCharacterComponent,
    FilmComponent,
    HeaderComponent,
    YodaComponent,
  ],
  entryComponents: [
    CardComponent,
    CardCharacterComponent,
    FilmComponent,
    HeaderComponent,
    YodaComponent,
  ],
})
export class ComponentsModule {}
