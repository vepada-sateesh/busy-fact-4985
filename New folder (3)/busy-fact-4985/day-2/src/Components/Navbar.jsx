import { Box, Container } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Container>
            <Box display="Flex" justifyContent="end" h="30px"   borderColor='red.200'>
                <Box  > 1860 123 1000</Box>
                <Box  >
                
                </Box>
                <Box  >Login/Sign Up</Box>
            </Box>
        </Container>
    </div>
  )
}

export default Navbar