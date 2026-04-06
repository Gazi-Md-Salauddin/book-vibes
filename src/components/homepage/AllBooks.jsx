import React, { useState, useEffect } from 'react'
import { FaRegStar } from "react-icons/fa6";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/booksData.json')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        console.log(data, 'books');
      });
  }, []);
  
  return (
    <div className="my-4">
      <h2 className="font-bold text-2xl text-center mb-6">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:grid-cols-3 gap-10">
      {books.map((book) => {
        return (
        <div className="card bg-base-100 shadow-sm">
  <figure className="p-6">
    <img
      src={book.image}
      alt={book.bookName} className="h-[250px]"/>
  </figure>
  <div className="card-body">
    <div className="flex gap-4">
    {book.tags.map((tag) =>(
      <div className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
    ))}
    </div>
    <h2 className="card-title text-2xl">
      {book.bookName}
    </h2>
    <p className="font-semibold text-lg">By: {book.author}</p>
    
    <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300 text-xl">
      <div className="font-semibold">{book.category}</div>
      <div className="flex gap-2 justify-center">{book.rating}<FaRegStar /></div>
    </div>
  </div>
</div>
        )
      })}
      </div>
    </div>
  )
}

export default AllBooks