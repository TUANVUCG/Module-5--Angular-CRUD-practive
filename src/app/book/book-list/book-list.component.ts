import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
    });
  }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    return this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
  }

  deleteById(id) {
    this.bookService.delete(id).subscribe(() => {
        this.getAllUser();
        alert('Success');
      },
      () => {
        alert('Fail');
      });
  }
}
