import React from 'react'
import { motion } from 'framer-motion'
import { Box, Button, Center, Flex, Spacer, Text, transition } from '@chakra-ui/react'
import Buttons from '../Button/Buttons'

export default function Navbar() {
    const MotionBox = motion(Box)
    const MotionText = motion(Text)
    const MotionButton=motion(Button)
    const boxVariant = {
        initial: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    }

    const itemVariant = {
        hover: {
            scale: 1.2,
            textShadow: '2px 2px 5px #B2C1DA',
            transition: {
                duration: 0.2
            }
        }
    }
    const buttonVariant = {
        hover: {
            backgroundColor: '#455B7D',
            boxShadow:'3px 3px 5px #344A6F',
            scale:1.2,
            transition:{
                duration:0.2,
            }
        },
        tap:{
            scale:0.9
        }
    }
    return (
        <MotionBox variants={boxVariant} initial='initial' animate='visible' h='10rem' w='100%' py='1rem' >
            <Flex
                color='#C3C7CD'
                mx='10rem'
                fontSize='25'
                justify='center'
            >
                <Text>Hello</Text>
                <Spacer />
                <MotionText
                    variants={itemVariant}
                    whileHover='hover'
                    mx='40'
                >Products</MotionText>
                <MotionText
                    variants={itemVariant}
                    whileHover='hover'
                    mx='40'
                >Pricing</MotionText>
                <MotionText
                    variants={itemVariant}
                    whileHover='hover'
                    mx='40'
                >About Us</MotionText>
                <Spacer />
                <Center >
                    <MotionButton
                        variants={buttonVariant}
                        whileHover='hover'
                        whileTap='tap'
                        bgColor='#344A6F'
                        borderWidth='0'
                        h='60'
                        borderRadius='30px'
                        px='28' color='#C3C7CD'
                        fontSize='20'
                    >
                        Sign Up
                    </MotionButton>
                </Center>
            </Flex>
        </MotionBox>
    )
}
