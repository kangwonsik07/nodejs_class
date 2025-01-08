import { Container } from '@mui/material'
import ItemForm from '../components/item/ItemForm'

import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { createItemThunk } from '../features/itemSlice'

function ItemCreatePage() {
   const dispatch = useDispatch()
   const handleSubmit = useCallback((itemData) => {
      dispatch(createItemThunk(itemData))
         .unwrap()
         .then(() => {
            window.location.href = '/item/createlist'
         })
         .catch((error) => {
            console.error(`상품등록 에러:${error}`)
         })
   })
   return (
      <Container maxWidth="md" sx={{ marginTop: 10, marginBottom: 13 }}>
         <h1>상품 등록</h1>
         <ItemForm onSubmit={handleSubmit} />
      </Container>
   )
}

export default ItemCreatePage
