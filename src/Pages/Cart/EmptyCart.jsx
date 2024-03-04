import { Box,Button,Text } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'



const EmptyCart = () => {
  return (
    <div>
        <Box pt="30px" display= "flex" flexDirection={"column"} alignItems = "center" backgroundColor="#F5F7F7">
            <img mt={20}   src='https://www.reliancedigital.in/build/client/images/emptycart.png' alt='cart'/>
            <div><Text color="black">Your Shopping Cart is Empty</Text></div>
            <Link to="/computer">
                <Button colorScheme={"none"} borderRadius={5} mt={12} mb={20} pl="20px" pr="20px" bgColor={"#E42529"} color = "white">CONTINUE SHOPPING</Button>
            </Link>
        </Box>
    </div>
  )
}

export default EmptyCart