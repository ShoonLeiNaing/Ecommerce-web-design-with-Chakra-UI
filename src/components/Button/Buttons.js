import React from 'react'
import {Button} from '@chakra-ui/react'

export default function Buttons({type,title}) {
    return (
       <Button
        bgColor='#344A6F'
        borderWidth={type==='btn'?'1px':'0'}
        borderColor='#D6A97E'
        h='60'
        borderRadius={type==='btn'?'10px':'30px'}
        px='28' color='#C3C7CD'
        fontSize='20'
       >
           {title}
       </Button>
    )
}
