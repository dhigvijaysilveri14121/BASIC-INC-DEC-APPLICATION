import { Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

const HomePage = () => {
  const count=useSelector((state)=>state.count || 0)
  const dispatch=useDispatch()
  const incClickHandler=()=>{
    dispatch({type:'INCREMENT'})
  }
  const decClickHandler=()=>{
    dispatch({type:'DECREMENT'})
  }
  return (
    
    <Box>
      <Button onClick={incClickHandler} className='incBtn' >+</Button>
      <Box className='countHolder'>{count}</Box>
      <Button onClick={decClickHandler} className='decBtn'>-</Button>
    </Box>
  )
}

export default HomePage