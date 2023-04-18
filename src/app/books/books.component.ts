import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Book {
  productName: string;
  author: string;
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
      author: 'james',
      year: '2018',
      image: '1.jpg',
    },
    {
      productName: 'The Alchemist',
      author: 'paulo',
      year: '1988',
      image: '2.jpg',
    },
    {
      productName: 'Life Of Pi',
      author: 'yann',
      year: '2001',
      image: '3.jpg',
    },
    {
      productName: 'Cosmos',
      author: 'carl',
      year: '1980',
      image: '4.jpg',
    },
    {
      productName: "Harry Potter and the Philosopher's Stone",
      author: 'rowling',
      year: '1997',
      image: '5.jpg',
    },
    {
      productName: 'Thinking Fast and Slow',
      author: 'daniel',
      year: '2011',
      image: '6.jpg',
    },
    {
      productName: "Gulliver's Travels",
      author: 'jonathan',
      year: '1726',
      image: '7.jpg',
    },
    {
      productName: 'A Game Of Thrones',
      author: 'george',
      year: '1996',
      image: '8.jpg',
    },
    {
      productName: 'A Game Of Thrones 123',
      author: 'jonathan',
      year: '1996',
      image: '8.jpg',
    },
    {
      productName: 'The Jungle Book',
      author: 'rudyard',
      year: '1894',
      image: '9.jpg',
    },
    {
      author: 'Chinua Achebe',
      year: '1958',
      productName: 'Things Fall Apart',
      image: 'things-fall-apart.jpg',
    },
    {
      author: 'Hans Christian Andersen',
      year: '1836',
      productName: 'Fairy tales',
      image: 'fairy-tales.jpg',
    },
    {
      author: 'Dante Alighieri',
      year: '1315',
      productName: 'The Divine Comedy',
      image: 'the-divine-comedy.jpg',
    },
    {
      author: 'Unknown',
      year: '-1700',
      productName: 'The Epic Of Gilgamesh',
      image: 'the-epic-of-gilgamesh.jpg',
    },
    {
      author: 'Unknown',
      year: '-600',
      productName: 'The Book Of Job',
      image: 'the-book-of-job.jpg',
    },
    {
      author: 'Unknown',
      year: '1200',
      productName: 'One Thousand and One Nights',
      image: 'one-thousand-and-one-nights.jpg',
    },
    {
      author: 'Unknown',
      year: '1350',
      productName: "Njál's Saga",
      image: 'njals-saga.jpg',
    },
    {
      author: 'Jane Austen',
      year: '1813',
      productName: 'Pride and Prejudice',
      image: 'pride-and-prejudice.jpg',
    },
    {
      author: 'Honoré de Balzac',
      year: '1835',
      productName: 'Le Père Goriot',
      image: 'le-pere-goriot.jpg',
    },
    {
      author: 'Samuel Beckett',
      year: '1952',
      productName: 'Molloy, Malone Dies, The Unnamable, the trilogy',
      image: 'molloy-malone-dies-the-unnamable.jpg',
    },
    {
      author: 'Giovanni Boccaccio',
      year: '1351',
      productName: 'The Decameron',
      image: 'the-decameron.jpg',
    },
    {
      author: 'Jorge Luis Borges',
      year: '1965',
      productName: 'Ficciones',
      image: 'ficciones.jpg',
    },
    {
      author: 'Emily Brontë',
      year: '1847',
      productName: 'Wuthering Heights',
      image: 'wuthering-heights.jpg',
    },
    {
      author: 'Albert Camus',
      year: '1942',
      productName: 'The Stranger',
      image: 'l-etranger.jpg',
    },
    {
      author: 'Paul Celan',
      year: '1952',
      productName: 'Poems',
      image: 'poems-paul-celan.jpg',
    },
    {
      author: 'Louis-Ferdinand Céline',
      year: '1932',
      productName: 'Journey to the End of the Night',
      image: 'voyage-au-bout-de-la-nuit.jpg',
    },
    {
      author: 'Miguel de Cervantes',
      year: '1610',
      productName: 'Don Quijote De La Mancha',
      image: 'don-quijote-de-la-mancha.jpg',
    },
    {
      author: 'Geoffrey Chaucer',
      year: '1450',
      productName: 'The Canterbury Tales',
      image: 'the-canterbury-tales.jpg',
    },
    {
      author: 'Anton Chekhov',
      year: '1886',
      productName: 'Stories',
      image: 'stories-of-anton-chekhov.jpg',
    },
    {
      author: 'Joseph Conrad',
      year: '1904',
      productName: 'Nostromo',
      image: 'nostromo.jpg',
    },
    {
      author: 'Charles Dickens',
      year: '1861',
      productName: 'Great Expectations',
      image: 'great-expectations.jpg',
    },
    {
      author: 'Denis Diderot',
      year: '1796',
      productName: 'Jacques the Fatalist',
      image: 'jacques-the-fatalist.jpg',
    },
    {
      author: 'Alfred Döblin',
      year: '1929',
      productName: 'Berlin Alexanderplatz',
      image: 'berlin-alexanderplatz.jpg',
    },
    {
      author: 'Fyodor Dostoevsky',
      year: '1866',
      productName: 'Crime and Punishment',
      image: 'crime-and-punishment.jpg',
    },
    {
      author: 'Fyodor Dostoevsky',
      year: '1869',
      productName: 'The Idiot',
      image: 'the-idiot.jpg',
    },
    {
      author: 'Fyodor Dostoevsky',
      year: '1872',
      productName: 'The Possessed',
      image: 'the-possessed.jpg',
    },
    {
      author: 'Fyodor Dostoevsky',
      year: '1880',
      productName: 'The Brothers Karamazov',
      image: 'the-brothers-karamazov.jpg',
    },
    {
      author: 'George Eliot',
      year: '1871',
      productName: 'Middlemarch',
      image: 'middlemarch.jpg',
    },
    {
      author: 'Ralph Ellison',
      year: '1952',
      productName: 'Invisible Man',
      image: 'invisible-man.jpg',
    },
    {
      author: 'Euripides',
      year: '-431',
      productName: 'Medea',
      image: 'medea.jpg',
    },
    {
      author: 'William Faulkner',
      year: '1936',
      productName: 'Absalom, Absalom!',
      image: 'absalom-absalom.jpg',
    },
    {
      author: 'William Faulkner',
      year: '1929',
      productName: 'The Sound and the Fury',
      image: 'the-sound-and-the-fury.jpg',
    },
    {
      author: 'Gustave Flaubert',
      year: '1857',
      productName: 'Madame Bovary',
      image: 'madame-bovary.jpg',
    },
    {
      author: 'Gustave Flaubert',
      year: '1869',
      productName: 'Sentimental Education',
      image: 'l-education-sentimentale.jpg',
    },
    {
      author: 'Federico García Lorca',
      year: '1928',
      productName: 'Gypsy Ballads',
      image: 'gypsy-ballads.jpg',
    },
    {
      author: 'Gabriel García Márquez',
      year: '1967',
      productName: 'One Hundred Years of Solitude',
      image: 'one-hundred-years-of-solitude.jpg',
    },
    {
      author: 'Gabriel García Márquez',
      year: '1985',
      productName: 'Love in the Time of Cholera',
      image: 'love-in-the-time-of-cholera.jpg',
    },
    {
      author: 'Johann Wolfgang von Goethe',
      year: '1832',
      productName: 'Faust',
      image: 'faust.jpg',
    },
    {
      author: 'Nikolai Gogol',
      year: '1842',
      productName: 'Dead Souls',
      image: 'dead-souls.jpg',
    },
    {
      author: 'Günter Grass',
      year: '1959',
      productName: 'The Tin Drum',
      image: 'the-tin-drum.jpg',
    },
    {
      author: 'João Guimarães Rosa',
      year: '1956',
      productName: 'The Devil to Pay in the Backlands',
      image: 'the-devil-to-pay-in-the-backlands.jpg',
    },
    {
      author: 'Knut Hamsun',
      year: '1890',
      productName: 'Hunger',
      image: 'hunger.jpg',
    },
    {
      author: 'Ernest Hemingway',
      year: '1952',
      productName: 'The Old Man and the Sea',
      image: 'the-old-man-and-the-sea.jpg',
    },
    {
      author: 'Homer',
      year: '-735',
      productName: 'Iliad',
      image: 'the-iliad-of-homer.jpg',
    },
    {
      author: 'Homer',
      year: '-800',
      productName: 'Odyssey',
      image: 'the-odyssey-of-homer.jpg',
    },
    {
      author: 'Henrik Ibsen',
      year: '1879',
      productName: "A Doll's House",
      image: 'a-Dolls-house.jpg',
    },
    {
      author: 'James Joyce',
      year: '1922',
      productName: 'Ulysses',
      image: 'ulysses.jpg',
    },
    {
      author: 'Franz Kafka',
      year: '1924',
      productName: 'Stories',
      image: 'stories-of-franz-kafka.jpg',
    },
    {
      author: 'Franz Kafka',
      year: '1925',
      productName: 'The Trial',
      image: 'the-trial.jpg',
    },
    {
      author: 'Franz Kafka',
      year: '1926',
      productName: 'The Castle',
      image: 'the-castle.jpg',
    },
    {
      author: 'Kālidāsa',
      year: '150',
      productName: 'The recognition of Shakuntala',
      image: 'the-recognition-of-shakuntala.jpg',
    },
    {
      author: 'Yasunari Kawabata',
      year: '1954',
      productName: 'The Sound of the Mountain',
      image: 'the-sound-of-the-mountain.jpg',
    },
    {
      author: 'Nikos Kazantzakis',
      year: '1946',
      productName: 'Zorba the Greek',
      image: 'zorba-the-greek.jpg',
    },
    {
      author: 'D. H. Lawrence',
      year: '1913',
      productName: 'Sons and Lovers',
      image: 'sons-and-lovers.jpg',
    },
    {
      author: 'Halldór Laxness',
      year: '1934',
      productName: 'Independent People',
      image: 'independent-people.jpg',
    },
    {
      author: 'Giacomo Leopardi',
      year: '1818',
      productName: 'Poems',
      image: 'poems-giacomo-leopardi.jpg',
    },
    {
      author: 'Doris Lessing',
      year: '1962',
      productName: 'The Golden Notebook',
      image: 'the-golden-notebook.jpg',
    },
    {
      author: 'Astrid Lindgren',
      year: '1945',
      productName: 'Pippi Longstocking',
      image: 'pippi-longstocking.jpg',
    },
    {
      author: 'Lu Xun',
      year: '1918',
      productName: 'Diary of a Madman',
      image: 'diary-of-a-madman.jpg',
    },
    {
      author: 'Naguib Mahfouz',
      year: '1959',
      productName: 'Children of Gebelawi',
      image: 'children-of-gebelawi.jpg',
    },
    {
      author: 'Thomas Mann',
      year: '1901',
      productName: 'Buddenbrooks',
      image: 'buddenbrooks.jpg',
    },
    {
      author: 'Thomas Mann',
      year: '1924',
      productName: 'The Magic Mountain',
      image: 'the-magic-mountain.jpg',
    },
    {
      author: 'Herman Melville',
      year: '1851',
      productName: 'Moby Dick',
      image: 'moby-dick.jpg',
    },
    {
      author: 'Michel de Montaigne',
      year: '1595',
      productName: 'Essays',
      image: 'essais.jpg',
    },
    {
      author: 'Elsa Morante',
      year: '1974',
      productName: 'History',
      image: 'history.jpg',
    },
    {
      author: 'Toni Morrison',
      year: '1987',
      productName: 'Beloved',
      image: 'beloved.jpg',
    },
    {
      author: 'Murasaki Shikibu',
      year: '1006',
      productName: 'The Tale of Genji',
      image: 'the-tale-of-genji.jpg',
    },
    {
      author: 'Robert Musil',
      year: '1931',
      productName: 'The Man Without Qualities',
      image: 'the-man-without-qualities.jpg',
    },
    {
      author: 'Vladimir Nabokov',
      year: '1955',
      productName: 'Lolita',
      image: 'lolita.jpg',
    },
    {
      author: 'George Orwell',
      year: '1949',
      productName: 'Nineteen Eighty-Four',
      image: 'nineteen-eighty-four.jpg',
    },
    {
      author: 'Ovid',
      year: '100',
      productName: 'Metamorphoses',
      image: 'the-metamorphoses-of-ovid.jpg',
    },
    {
      author: 'Fernando Pessoa',
      year: '1928',
      productName: 'The Book of Disquiet',
      image: 'the-book-of-disquiet.jpg',
    },
    {
      author: 'Edgar Allan Poe',
      year: '1950',
      productName: 'Tales',
      image: 'tales-and-poems-of-edgar-allan-poe.jpg',
    },
    {
      author: 'Marcel Proust',
      year: '1920',
      productName: 'In Search of Lost Time',
      image: 'a-la-recherche-du-temps-perdu.jpg',
    },
    {
      author: 'François Rabelais',
      year: '1533',
      productName: 'Gargantua and Pantagruel',
      image: 'gargantua-and-pantagruel.jpg',
    },
    {
      author: 'Juan Rulfo',
      year: '1955',
      productName: 'Pedro Páramo',
      image: 'pedro-paramo.jpg',
    },
    {
      author: 'Rumi',
      year: '1236',
      productName: 'The Masnavi',
      image: 'the-masnavi.jpg',
    },
    {
      author: 'Salman Rushdie',
      year: '1981',
      productName: "Midnight's Children",
      image: 'midnights-children.jpg',
    },
    {
      author: 'Saadi',
      year: '1257',
      productName: 'Bostan',
      image: 'bostan.jpg',
    },
    {
      author: 'Tayeb Salih',
      year: '1966',
      productName: 'Season of Migration to the North',
      image: 'season-of-migration-to-the-north.jpg',
    },
    {
      author: 'José Saramago',
      year: '1995',
      productName: 'Blindness',
      image: 'blindness.jpg',
    },
    {
      author: 'William Shakespeare',
      year: '1603',
      productName: 'Hamlet',
      image: 'hamlet.jpg',
    },
    {
      author: 'William Shakespeare',
      year: '1608',
      productName: 'King Lear',
      image: 'king-lear.jpg',
    },
    {
      author: 'William Shakespeare',
      year: '1609',
      productName: 'Othello',
      image: 'othello.jpg',
    },
    {
      author: 'Sophocles',
      year: '-430',
      productName: 'Oedipus the King',
      image: 'oedipus-the-king.jpg',
    },
    {
      author: 'Stendhal',
      year: '1830',
      productName: 'The Red and the Black',
      image: 'le-rouge-et-le-noir.jpg',
    },
    {
      author: 'Laurence Sterne',
      year: '1760',
      productName: 'The Life And Opinions of Tristram Shandy',
      image: 'the-life-and-opinions-of-tristram-shandy.jpg',
    },
    {
      author: 'Italo Svevo',
      year: '1923',
      productName: 'Confessions of Zeno',
      image: 'confessions-of-zeno.jpg',
    },
    {
      author: 'Jonathan Swift',
      year: '1726',
      productName: "Gulliver's Travels",
      image: 'gullivers-travels.jpg',
    },
    {
      author: 'Leo Tolstoy',
      year: '1867',
      productName: 'War and Peace',
      image: 'war-and-peace.jpg',
    },
    {
      author: 'Leo Tolstoy',
      year: '1877',
      productName: 'Anna Karenina',
      image: 'anna-karenina.jpg',
    },
    {
      author: 'Leo Tolstoy',
      year: '1886',
      productName: 'The Death of Ivan Ilyich',
      image: 'the-death-of-ivan-ilyich.jpg',
    },
    {
      author: 'Mark Twain',
      year: '1884',
      productName: 'The Adventures of Huckleberry Finn',
      image: 'the-adventures-of-huckleberry-finn.jpg',
    },
    {
      author: 'Valmiki',
      year: '-450',
      productName: 'Ramayana',
      image: 'ramayana.jpg',
    },
    {
      author: 'Virgil',
      year: '-23',
      productName: 'The Aeneid',
      image: 'the-aeneid.jpg',
    },
    {
      author: 'Vyasa',
      year: '-700',
      productName: 'Mahabharata',
      image: 'the-mahab-harata.jpg',
    },
    {
      author: 'Walt Whitman',
      year: '1855',
      productName: 'Leaves of Grass',
      image: 'leaves-of-grass.jpg',
    },
    {
      author: 'Virginia Woolf',
      year: '1925',
      productName: 'Mrs Dalloway',
      image: 'mrs-dalloway.jpg',
    },
    {
      author: 'Virginia Woolf',
      year: '1927',
      productName: 'To the Lighthouse',
      image: 'to-the-lighthouse.jpg',
    },
    {
      author: 'Marguerite Yourcenar',
      year: '1951',
      productName: 'Memoirs of Hadrian',
      image: 'memoirs-of-hadrian.jpg',
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
    this.searchForm.reset();
  }
}
