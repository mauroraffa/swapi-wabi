import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
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
  people!: People[];
  films!: Film[];
  loadingPage: boolean = true;

  constructor(
    private swApiService: SWApiService,
    private cacheService: CacheService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const idCharacter = this.activatedRoute.snapshot.paramMap.get('id');
    this.people = this.cacheService.get(this.cacheService.constants.PEOPLE);
    this.character = this.people.filter((data) => data.id === idCharacter)[0];
    this.getFilms();
  }

  private getFilms() {
    this.loadingPage = true;
    this.swApiService
      .getFilms()
      .pipe(
        map((data: any) => {
          this.films = data.results.filter((film: Film) =>
            this.character.films.includes(film.episode_id.toString())
          );
          this.loadingPage = false;
        })
      )
      .subscribe();
  }
}
