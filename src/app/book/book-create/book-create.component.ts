import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book.service';
import {Book} from '../../model/book';

// @ts-ignore
@Component({
  selector: 'app-user-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {};
  isSubmitted = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  createNewBook() {
    this.isSubmitted = true;
    this.bookService.save(this.book).subscribe(() => {
        alert('Success');
      },
      () => {
        alert('Fail');
      });
  }
}
