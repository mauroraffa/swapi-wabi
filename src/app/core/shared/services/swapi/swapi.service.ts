import { Injectable } from '@angular/core';
import { Observable, EMPTY, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { retry, catchError, shareReplay, map } from 'rxjs/operators';
import { People } from '../../interfaces/people.interface';
import { Film } from '../../interfaces/film.interface';

@Injectable({
  providedIn: 'root',
})
export class SWApiService {
  constructor(private http: HttpClient) {}

  getPeople(name?: string, page?: number): Observable<any> {
    const url = `${environment.people}/?`;
    let params = new HttpParams();
    if (name) {
      params = params.append('search', name);
    }
    if (page) {
      params = params.append('page', page);
    }
    return this.http.get<any>(url, { params: params }).pipe(
      map((response) => {
        response.results.forEach((character: People) => {
          character.id = this.generateIdbyURL(character.url);
          character.films = character.films.map((film: string) =>
            this.generateIdbyURL(film)
          );
          character.imagePath = `${environment.assetCharacter}${character.id}.jpg`;
        });
        return response;
      }),
      catchError((err: any) => {
        console.log(err);
        return of(err);
      })
    );
  }

  getFilms(): Observable<any> {
    let url = `${environment.films}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        response.results.forEach((film: Film) => {
          film.imagePath = `${environment.assetFilms}${film.episode_id}.jpg`;
        });
        return response;
      }),
      catchError((err: any) => {
        console.log(err);
        return of(err);
      })
    );
  }

  generateIdbyURL(text: string) {
    return text.split('/')[5];
  }
}
