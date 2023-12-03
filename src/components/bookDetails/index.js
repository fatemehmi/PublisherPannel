import { Flex} from '@chakra-ui/react'
import React from 'react'
import BooksList from '@/components/bookDetails/BooksList'
import BookDetailCard from '@/components/bookDetails/BookDetailCard'
import BookDescription from '@/components/bookDetails/BookDescription'
import Comment from '@/components/bookDetails/Comment'
import BookBuy from '@/components/bookDetails/BookBuy'
import BookDetail from './BookDetail'
import useGetBookInformation from '@/react-query/hooks/useGetBookInformation'
import { useParams } from 'next/navigation'
import AuthorBooks from './authorBooks'
import SuggestBooks from './suggestBooks'
import useIsBookBought from '@/react-query/hooks/useIsBookBought'

// TODO:
//1.مشخصات
//2.pdf
//3.خرید
//4.comment API
//5.comment Pagination

function BookDetails() {
  const params=useParams()
  const{data,isLoading,isSuccess,isError}=useGetBookInformation(params.bookId)

  
  if(isLoading){
    return<p>isLoading...</p>
  }
  if(isError){
    return (
      <div className='w-full'>
          <div className='mx-auto w-[90%] h-full py-[50px]'>
              <Flex height="full" gap="20px">
                  <Flex flexDir="column" width="65%" gap="46px">
                      <BookDetailCard/>
                      <BookDescription/>
                      <BooksList/>
                      <BooksList/>
                      <Comment/>
                  </Flex>
                  <div className='w-[35%] relative'>
                    <BookDetail />
                  </div>
              </Flex>
          </div>
      </div>
  
    )
  }
  if(isSuccess){

    return (
      <div className='w-full'>
          <div className='mx-auto w-[90%] h-full py-[50px]'>
              <Flex height="full" gap="20px">
                  <Flex flexDir="column" width="65%" gap="46px">
                      <BookDetailCard data={data.data[0]}/>
                      <BookDescription data={data.data[0]}/>
                      <AuthorBooks/>
                      <SuggestBooks/>
                      <Comment/>
                  </Flex>
                  <div className='w-[35%] relative'>
                    <BookBuy data={data.data[0]}/>
                    <BookDetail data={data.data[0]} />
                  </div>
              </Flex>
          </div>
      </div>
  
    )
  }
}

export default BookDetails