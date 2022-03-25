import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/core/shared/interfaces/film.interface';

@Component({
  selector: 'wb-film',
  styleUrls: ['./film.component.scss'],
  templateUrl: './film.component.html',
})
export class FilmComponent {
  @Input() film!: Film;
  @Input() loading!: boolean;
}
