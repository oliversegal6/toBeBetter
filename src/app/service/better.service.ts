import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CHILDS } from '../mock/mock-childs';
import { Child } from '../model/child';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BetterService {

  private childsUrl = 'api/childs';

  constructor( private http: HttpClient) { }

  getChilds(): Observable<Child[]> {
    // return of(CHILDS);
    return this.http.get<Child[]>(this.childsUrl)
    .pipe(
      tap(heroes => this.log(`fetched childs`)),
      catchError(this.handleError('getChilds', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {

  }
}
