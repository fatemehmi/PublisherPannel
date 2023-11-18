import React from 'react'
import BooksList from '../BooksList'
import useGetMyBooks from '@/react-query/hooks/useGetMyBooks'
import filterBooks from '@/helpers/filterBooks'

function MyBooks(props) {
    const{data:myBooks,isLoading}=useGetMyBooks()

    const filteredBooks=filterBooks(props.searchValue,myBooks)
    
    if (isLoading){
        return<p>isLoading...</p>
    }
  return (
    <BooksList booksArray={filteredBooks}/>
  )
}

export default MyBooks