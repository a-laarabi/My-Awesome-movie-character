const title = document.querySelector('.book_title');
const author = document.querySelector('.book_author');
const add = document.querySelector('.book_add');
const books_list = document.querySelector('.list');


function Book(book_id, title, author) {
  this.book_id = book_id;
  this.title = title;
  this.author = author;
}

const books = [];

add.addEventListener('click', (event) => {
  event.preventDefault();
  const book_id = books.length + 1;
  const newBook = new Book(book_id, title.value, author.value);
  books.push(newBook);
  list();
  title.value = '';
  author.value = '';
});

function list() {
  const eachBook = document.createElement('div');
  const book_id = books.length + 1;
  eachBook.classList.add(book_id);
  const title_p = document.createElement('p');
  title_p.textContent = title.value;
  const author_p = document.createElement('p');
  author_p.textContent = author.value;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add(book_id);
  const line = document.createElement('hr');

  eachBook.appendChild(title_p);
  eachBook.appendChild(author_p);
  eachBook.appendChild(removeBtn);
  eachBook.appendChild(line);
  books_list.appendChild(eachBook);

}

console.log(books);