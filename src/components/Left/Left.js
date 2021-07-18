import React from 'react'
import { Box, Text, Heading,Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'


export default function Left() {

    const MotionBox = motion(Box)
    const MotionText = motion(Text)
    const MotionHeading = motion(Heading)
    const MotionButton = motion(Button)
    const boxVariants = {
        initial: {
            x: 0,
            opacity: 1,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition:{
                duration:3,
                staggerChildren:0.3,   
            }
        }
    }
    const itemVariants={
        initial: {
            x: -20,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition:{
                type:'spring',  
            }
        }
    }
    return (
        <MotionBox 
            variants={boxVariants} 
            initial='initial' 
            animate='visible'
            color='#C3C7CD'
            flex='0.5'
        >
            <MotionText variants={itemVariants} mb='60' color='#D6A97E'>Running Shoe</MotionText>
            <MotionHeading variants={itemVariants} as='h1' fontSize='60px' mb='40'>Nike React <br /> Miller 2</MotionHeading>
            <MotionText variants={itemVariants} mb='40' fontSize='20'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur.</MotionText>
            <MotionButton 
                variants={itemVariants} 
                whileHover={{
                    scale:1.15,
                    boxShadow:'5px 5px 8px #344A6F',
                    
                }}
                whileTap={{
                    scale:0.9,
                    backgroundColor:'#576C8F'
                }}
                bgColor='#344A6F'
                boderWidth='1px'
                borderColor='#D6A97E'
                h='60'
                borderRadius='10px'
                px='28'
                fontSize='20'
                color='#C3C7CD'
            >
                Buy Now
            </MotionButton>
        </MotionBox>
   

    )
}
