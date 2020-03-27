const createBook = (id,title,author,price) => {
  const book = Object.create(bookPrototype);
  book.id = id,
  book.title = title,
  book.author = author,
  book.price = price,
  book.rating = [];
return book;
}

const bookPrototype = {
    getPrice() {return this.price},
    getInfo() {return `${this.title} by ${this.author}`},
    addRating(string){this.rating.push(string)}
    getRating(){
        
    }
    }
