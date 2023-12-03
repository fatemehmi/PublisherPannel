import React from 'react'
import {VStack} from "@chakra-ui/react";
import CommentItem from './CommentItem';

function CommentList() {
  return (
    <VStack gap="24px" paddingY="24px" paddingX="16px">
         <CommentItem/>
         <CommentItem/>
         <CommentItem/>
        </VStack>
  )
}

export default CommentList