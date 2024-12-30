import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private http = inject(HttpClient);
  public users = signal<User[]>([]);
  public result = signal<any>
  readonly url = 'https://jsonplaceholder.typicode.com/users';
  readonly url2 = 'http://localhost:8081/backend/list'

  // getUsers(): Observable<User[]> {
  //   console.log('getUsers');
  //   return this.http.get<User[]>(this.url).pipe(
  //     tap((users) => this.users.set(users))
  //   );
  // }

  getList() : Observable<any> {
    console.log('getList');
    return this.http.get(this.url2, { responseType: 'text' });  }
}
