import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from './model/user';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}`);
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`${API_URL}/${id}`);
  }

  editById(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${API_URL}/${id}`, user);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(`${API_URL}`, user);
  }

  delete(id: number): Observable<User> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
