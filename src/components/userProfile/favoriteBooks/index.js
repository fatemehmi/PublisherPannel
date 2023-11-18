import React from 'react'
import BooksList from '../BooksList'

function FavoriteBooks(props) {
    const{data:favoriteBooks,isLoading}=useGetMyBooks()

    const filteredBooks=filterBooks(props.searchValue,favoriteBooks)

    if (isLoading){
        return<p>isLoading...</p>
    }
  return (
    <BooksList booksArray={filteredBooks}/>
  )
}

export default FavoriteBooks