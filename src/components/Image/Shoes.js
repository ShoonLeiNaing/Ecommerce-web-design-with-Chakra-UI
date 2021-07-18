import React from 'react'
import { Box, Image, Center } from '@chakra-ui/react'
import img from './shoe-removebg.png'
import { motion } from 'framer-motion'

function Circle({ color, children }) {

    return (
        <Box
            bgColor={color}
            borderRadius='100%'
            position='absolute'
            top='50px'
            bottom='50px'
            right='50px'
            left='50px'>
            {children}
        </Box>
    )
}
export default function Shoes() {
    const MotionBox = motion(Box)
    const MotionImage = motion(Image)
    const boxVariants = {
        initial: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 2,
                when: 'beforeChildren'
            }
        }
    }
    const imageVariants = {
        initial: {
            y: 5000,
            x: -2500
        },
        visible: {
            y: 0,
            x: 0,
            transition: {
                duration: 1.2,
                type: 'spring',
            }
        }
    }
    return (

        <Box flex='1'>
            <Center>
            <MotionBox variants={boxVariants} initial='initial' animate='visible' h='370px' w='370px' bgColor='#344A6F' borderRadius='100%' position='relative' >
                <Circle color='#455B7D'>
                    <Circle color='#576C8F'>
                        <Center>
                            <Box
                                transform='rotate(-25deg)'
                                position='relative'
                                bottom='70px'
                                right='25px'
                            >
                                <MotionImage 
                                  variants={imageVariants}
                                  whileTap={{
                                      y:[-150,10,-150,10,-150,10,-150,0],
                                      x:[75,0,75,0,75,0,75,0],
                                      transition:{
                                        duration:4,
                                        
                                      }
                                  }}
                                  src={img} 
                                  h='270px' 
                                  w='490px'/>
                            </Box>
                        </Center>
                    </Circle>
                </Circle>
            </MotionBox>
            </Center>
        </Box>
    )
}
