import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/core/shared/interfaces/film.interface';
import { People } from 'src/app/core/shared/interfaces/people.interface';
import { CacheService } from 'src/app/core/shared/services/cache/cache.service';
import { SWApiService } from '../../core/shared/services/swapi/swapi.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  character!: People;
  films!: Film[];
  loadingPage: boolean = true;

  constructor(
    private swApiService: SWApiService,
    private route: ActivatedRoute,
    private cacheService: CacheService
  ) {}

  ngOnInit() {
    this.character = this.cacheService.get(
      this.cacheService.constants.CHARACTER
    );
    this.swApiService.getFilms().subscribe((data) => {
      this.films = [];
      data.results.forEach((film: Film) => {
        film.imagePath = `https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`;
        if (this.character.films.includes(film.episode_id.toString())) {
          this.films.push(film);
        }
      });
      this.loadingPage = false;
    });
  }
}
