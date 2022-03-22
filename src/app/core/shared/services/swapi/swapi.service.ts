import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { retry, catchError, shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SWApiService {
  constructor(private http: HttpClient) {}

  getPeople(name?: string, page?: number): Observable<any> {
    let url = `${environment.people}/?`;
    let params = new HttpParams();
    if (name) {
      params = params.append('search', name);
    }
    if (page) {
      params = params.append('page', page);
    }
    return this.http.get<any>(url, { params: params }).pipe(
      retry(2),
      catchError((err: any) => {
        console.log(err);
        return EMPTY;
      }),
      shareReplay()
    );
  }

  getFilms(): Observable<any> {
    let url = `${environment.films}`;
    return this.http.get<any>(url).pipe(
      retry(2),
      catchError((err: any) => {
        console.log(err);
        return EMPTY;
      }),
      shareReplay()
    );
  }
}
