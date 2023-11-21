
import React from 'react'
import { useParams } from 'next/navigation'

function Book() {
    const params=useParams()
    
  return (
    <div>{params.bookId}</div>
  )
}

export default Book