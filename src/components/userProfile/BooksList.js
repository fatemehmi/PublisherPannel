import BookCard from '@/components/ui/userProfile/BookCard'
import { Flex } from '@chakra-ui/react'
import React from 'react'


function BooksList(props) {
  useGet
  return (
    <Flex width="820px" flexWrap="wrap" rowGap="20px" justifyContent="space-between">
        {/* {props.booksArray.map(book=><BookCard key={book.id} info={book.info}/>)} */}
    </Flex>
  )
}

export default BooksList