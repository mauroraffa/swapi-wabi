import { Component, OnInit, OnDestroy } from '@angular/core';
import { People } from 'src/app/core/shared/interfaces/people.interface';
import { SWApiService } from '../../core/shared/services/swapi/swapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private swApiService: SWApiService) {}
  people: Array<People> = [];
  nroPage = 1;
  searchName: string = '';
  enableNextPage: boolean = false;
  enablePreviusPage: boolean = false;
  loadingPage: boolean = true;
  firstTimePage: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.firstTimePage = false;
    }, 6000);
    this.searchPeaople();
  }

  modelChangeFn(event: any) {
    this.searchName = event;
    if (this.searchName.length > 2 || this.searchName.length == 0) {
      this.searchPeaople();
    }
  }

  nextPage() {
    this.nroPage++;
    this.searchPeaople();
  }

  previusPage() {
    this.nroPage--;
    this.searchPeaople();
  }

  searchPeaople() {
    this.loadingPage = true;
    this.swApiService
      .getPeople(this.searchName, this.nroPage)
      .subscribe((data) => {
        this.enableNextPage = data.next ? true : false;
        this.enablePreviusPage = data.previous ? true : false;
        this.people = [];
        data.results.forEach((character: People) => {
          character.id = character.url.split('/')[5];
          character.films = character.films.map((film) => film.split('/')[5]);
          character.imagePath = `https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`;
          this.people.push(character);
        });
        this.loadingPage = false;
      });
  }
}
