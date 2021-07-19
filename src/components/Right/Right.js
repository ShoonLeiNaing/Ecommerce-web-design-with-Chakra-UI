import React from 'react'
import {Box,Flex,Text,Center} from '@chakra-ui/react'
import { Icon} from '@iconify/react';
import {motion} from 'framer-motion'
import detectiveIcon from '@iconify/icons-emojione-v1/detective';
import moneyBag from '@iconify/icons-emojione-v1/money-bag';

export default function Right() {
    const MotionBox=motion(Box)
    const MotionText=motion(Text)
    const MotionIcon=motion(Icon)

    const boxVariants={
        initial:{
            x:0,
            opacity:1,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                delay:2,
                duration:1.5,
                when:'beforeChildren',
                staggerChildren:0.4
            }
        }
    }
    const itemVariants={
        initial:{
            opacity:0,
            x:30
        },
        visible:{
            opacity:1,
            x:0,       
        }
    }
    return (
        <MotionBox variants={boxVariants} initial='initial' animate='visible' flex='0.4' color='#C3C7CD'>
           <MotionBox variants={itemVariants}><Icon icon={detectiveIcon} style={{fontSize: '70px'}} /></MotionBox>
           <MotionText variants={itemVariants} fontSize='30' py='12'>Make it yours</MotionText>
           <MotionText variants={itemVariants} fontSize='20' pb='15'>Lorem ipsum dolor sit <br/>ipsum dolor sit.</MotionText>
           <MotionBox variants={itemVariants} h='8px' w='60px' borderRadius='20px' bgColor='#D6A97E'></MotionBox>
           <MotionBox variants={itemVariants}>
           <Flex align='center'>
            <MotionText fontSize='30' py='20' pr='8'>$199</MotionText>
            <MotionIcon  icon={moneyBag} style={{fontSize: '25px',marginBottom:'10px'}} />
           </Flex>
           </MotionBox>
        </MotionBox>
    )
}
