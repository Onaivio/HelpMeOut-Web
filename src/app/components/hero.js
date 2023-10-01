'use client'
import { Stack, Box, Text, Button, Heading, Img } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from "next/link";
import React from 'react';
const Hero = () => {
    return (
        <Stack className="hero"
            minH={'100vh'}
            direction={['column', 'column', 'row', 'row']}
            pr={'50px'}
            pl={'50px'}
        >
            {/** text side */}
            <Box m={'auto'}>
                <Stack>
                    <Box>
                        <Stack direction={'column'} className='heading'>
                            <Box><Heading color={'#100A42'}>Show Them</Heading></Box>
                            <Box><Heading color={'#100A42'}>Don't Just Tell Them</Heading></Box>
                        </Stack>
                    </Box>
                    <Box mt={'20px'}>
                        <Text color={'black'} opacity={'75%'}>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</Text>
                    </Box>
                    <Box mt={'50px'}>
                        <Link href={'./login'}><Button colorScheme='#100A42' size='lg' bg={'#100A42'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Install HelpMeOut <ArrowForwardIcon />
                        </Button></Link>
                    </Box>
                </Stack>
            </Box>

            {/**image side */}
            <Box m={'auto'}>
                <Img src="/heroright.png" />
            </Box>
        </Stack>
    );
}

export default Hero;