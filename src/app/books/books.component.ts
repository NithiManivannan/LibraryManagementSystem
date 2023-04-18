import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Book {
  productName: string;
  description: string;
  category: string;
  author: string;
  price: string;
  year: string;
  image: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public books: Book[] = [
    {
      productName: 'Atomic Habits',
      description: 'sample Description',
      category: 'science',
      author: 'james',
      price: '99',
      year: '2002',
      image: '1.jpg',
    },
    {
      productName: 'The Alchemist',
      description: 'sample Description',
      category: 'novel',
      author: 'paulo',
      price: '49',
      year: '2000',
      image: '2.jpg',
    },
    {
      productName: 'Life Of Pi',
      description: 'sample Description',
      category: 'adventure',
      author: 'james',
      price: '69',
      year: '2001',
      image: '3.jpg',
    },
    {
      productName: 'Cosmos',
      description: 'sample Description',
      category: 'science',
      author: 'paulo',
      price: '59',
      year: '2000',
      image: '4.jpg',
    },
    {
      productName: "Harry Potter and the Philosopher's Stone",
      description: 'sample Description',
      category: 'novel',
      author: 'rowling',
      price: '149',
      year: '2001',
      image: '5.jpg',
    },
    {
      productName: 'Thinking Fast and Slow',
      description: 'sample Description',
      category: 'science',
      author: 'james',
      price: '79',
      year: '2002',
      image: '6.jpg',
    },
    {
      productName: "Gulliver's Travels",
      description: 'sample Description',
      category: 'adventure',
      author: 'rowling',
      price: '149',
      year: '2000',
      image: '7.jpg',
    },
    {
      productName: 'A Game Of Thrones',
      description: 'sample Description',
      category: 'novel',
      author: 'paulo',
      price: '119',
      year: '2001',
      image: '8.jpg',
    },
    
    {
      productName: 'The Jungle Book',
      description: 'sample Description',
      category: 'adventure',
      author: 'rowling',
      price: '99',
      year: '2002',
      image: '9.jpg',
    },
  ];
  public booksCopy: Book[] = JSON.parse(JSON.stringify(this.books));
  public authors: string[] = [];
  public years: string[] = [];
  public titles: string[] = [];
  public visibleCount = 3;

  public searchForm = new FormGroup({
    author: new FormControl(),
    year: new FormControl(),
    bookTitle: new FormControl(),
  });

  ngOnInit(): void {
    this.authors = [...new Set(this.books.map((book) => book.author))];
    this.titles = [...new Set(this.books.map((book) => book.productName))];
    this.years = [...new Set(this.books.map((book) => book.year))];
  }

  getImageUrl(imageName: string): string {
    return `assets/images/${imageName}`;
  }

  loadMore() {
    this.visibleCount += 3;
  }

  search() {
    const { author, bookTitle, year } = this.searchForm.value;
    let filteredBooks: Book[] = this.booksCopy;
    if (!author && !year && !bookTitle) {
      this.books = filteredBooks;
      return;
    }
    if (author) {
      filteredBooks = filteredBooks.filter((book) => book.author === author);
    }
    if (year) {
      filteredBooks = filteredBooks.filter((book) => book.year === year);
    }
    if (bookTitle) {
      filteredBooks = filteredBooks.filter(
        (book) => book.productName === bookTitle
      );
    }

    this.books = filteredBooks;
  }

  reset(): void {
    this.books = this.booksCopy;
  }
}
