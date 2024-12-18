import { Container } from '@mui/material'
import PostForm from '../components/post/PostForm'

import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { createPostThunk } from '../features/postSlice'

const PostCreatePage = () => {
   const dispatch = useDispatch()

   const handleSubmit = useCallback(
      // postData: 사용자가 입력한 게시물 데이터'
      /* 
        postData={
            content: '내용입니다.',
            hashtags:'#여행 #맛집',
            img: 파일객체
        }
        */
      (postData) => {
         dispatch(createPostThunk(postData))
            .unwrap()
            .then(() => {
               window.location.href = '/' // 게시물 등록 후 메인페이지로 이동
            })
            .catch((error) => {
               console.error('게시물 등록 에러', error)
               alert('게시물 등록에 실패했습니다.', error)
            })
      },
      [dispatch]
   )

   return (
      <Container maxWidth="md">
         <h1>게시물 등록</h1>
         <PostForm onSubmit={handleSubmit} />
      </Container>
   )
}

export default PostCreatePage
