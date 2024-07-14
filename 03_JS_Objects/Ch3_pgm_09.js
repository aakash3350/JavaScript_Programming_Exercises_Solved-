// Concatenating string properties

var book1;
var book2;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien",
        year: 1979
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman",
        year: 1987
};

book3 = {
	title: "Atomic Habits ",
	author: "james clear",
        year: 2018
};

console.log(book1.title + " by " + book1.author + "published in" + book1.year);
console.log(book2.title + " by " + book2.author + "published in" + book2.year);
console.log(book3.title + " by " + book3.author + "published in" + book3.year);


/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */
