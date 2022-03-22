import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/core/shared/interfaces/film.interface';
import { CacheService } from 'src/app/core/shared/services/cache/cache.service';

@Component({
  selector: 'wb-film',
  styleUrls: ['./film.component.scss'],
  templateUrl: './film.component.html',
})
export class FilmComponent implements OnInit {
  @Input() film!: Film;
  @Input() loading!: boolean;

  constructor(private router: Router, private cacheService: CacheService) {}

  ngOnInit() {}
}
