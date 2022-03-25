import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map } from 'rxjs/operators';
import { People } from 'src/app/core/shared/interfaces/people.interface';
import { CacheService } from 'src/app/core/shared/services/cache/cache.service';
import { SWApiService } from '../../core/shared/services/swapi/swapi.service';

@Component({
  selector: 'wb-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  constructor(
    private swApiService: SWApiService,
    private router: Router,
    private cacheService: CacheService
  ) {
    this.loadingItems = Array(10)
      .fill(0)
      .map((x, i) => i + 1);
  }
  people: Array<People> = [];
  nroPage = 1;
  totalPages = 0;
  loadingItems: number[];
  enableNextPage: boolean = false;
  enablePreviusPage: boolean = false;
  loadingPage: boolean = true;

  ngOnInit() {
    this.searchPeople();
  }

  pageSelectedEvent(page: number) {
    this.nroPage = page;
    this.searchPeople();
  }

  searchPeople(serachName?: string): void {
    this.loadingPage = true;
    this.swApiService
      .getPeople(serachName, this.nroPage)
      .pipe(
        map((data: any) => {
          this.totalPages = Math.ceil(data.count / 10);
          this.enableNextPage = data.next ? true : false;
          this.enablePreviusPage = data.previous ? true : false;
          this.people = data.results;
          this.cacheService.set(
            this.cacheService.constants.PEOPLE,
            this.people
          );
          this.loadingPage = false;
        })
      )
      .subscribe();
  }

  clickCard(character: People) {
    this.router.navigate([String(`/search/character/${character.id}`)]);
  }
}
