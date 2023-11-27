import { Flex } from '@chakra-ui/react'
import React from 'react'
import BooksList from '@/components/bookDetails/BooksList'
import BookDetailCard from '@/components/bookDetails/BookDetailCard'
import BookDescription from '@/components/bookDetails/BookDescription'
import Comment from '@/components/bookDetails/Comment'

function BookDetails() {
  return (
    <div className='w-full h-screen'>
        <div className='mx-auto w-[90%] h-full py-[50px]'>
            <Flex height="full">
                <Flex flexDir="column" width="65%" gap="46px">
                    <BookDetailCard/>
                    <BookDescription/>
                    <BooksList/>
                    <BooksList/>
                    <Comment/>
                </Flex>
                <Flex width="35%"></Flex>
            </Flex>
        </div>

    </div>
  )
}

export default BookDetails