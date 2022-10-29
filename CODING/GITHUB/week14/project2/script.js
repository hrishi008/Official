// https://www.googleapis.com/books/v1/users/userId/bookshelves    
// google user api practice
let user='Favorites';
fetch(`https://www.googleapis.com/books/v1/users/${user}/bookshelves`).then((res)=>res.json()).then((data)=>console.log(data)).catch((error)=>document.write('hiii')).finally(console.log('completed'));
