import React from 'react'
import {Box,Center,Flex,Spacer} from '@chakra-ui/react'
import Navbar from '../../components/Navbar/Navbar'
import Left from '../../components/Left/Left'
import Shoes from '../../components/Image/Shoes'
import Right from '../../components/Right/Right'

export default function Nike() {
    return (
        <Box bgColor='#23395D' minH='100vh' minW='100vw' letterSpacing='3px' >
            <Navbar/>
            <Flex px='10rem' py='5rem' alignItems='center' >
               <Left/>
               <Shoes/> 
               <Right/>
            </Flex>
        </Box>
    )
}
