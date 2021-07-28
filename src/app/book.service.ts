import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Book} from './model/book';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}`);
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/${id}`);
  }

  editById(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/${id}`, book);
  }

  save(book: Book): Observable<Book> {
    return this.http.post<Book>(`${API_URL}`, book);
  }

  delete(id: number): Observable<Book> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
