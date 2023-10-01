'use client'

import { Stack, Box, Img, Text } from '@chakra-ui/react';
import React from 'react';
const Footer = () => {
    return (
        <Stack direction={['column', 'column', 'row', 'row']} bg={'#120B48'} p={['50px', '50px', '100px', '100px']}>
            <Box w={['100%', '100%', '40%', '40%']}>
                <Img src='footerLogo.png' />
            </Box>
            <Box w={['100%', '100%', '60%', '60%']} color={'white'} fontSize={['8px', '8px', '15px', '15px']}>
                <Stack direction={'row'}>
                    <Box className='Menu' w={'33.3%'}>
                        <Stack direction={'column'}>
                            <Box mb={['10px', '10px', '20px', '20px']}><Text fontWeight={'bold'}>Menu</Text></Box>
                            <Box mb={['10px', '10px', '20px', '20px']}><Text>Home</Text></Box>
                            <Box mb={['10px', '10px', '20px', '20px']}><Text>Converter</Text></Box>
                            <Box><Text>How It Works</Text></Box>
                        </Stack>
                    </Box>
                    <Box className='About us' w={'33.3%'}>
                        <Stack direction={'column'}>
                            <Box mb={['10px', '10px', '20px', '20px']}><Text fontWeight={'bold'}>About us</Text></Box>
                            <Box mb={['10px', '10px', '20px', '20px']}><Text>About</Text></Box>
                            <Box mb={['10px', '10px', '20px', '20px']}><Text>Contact us</Text></Box>
                            <Box><Text>Privacy Policy</Text></Box>
                        </Stack>
                    </Box>
                    <Box className='Screen Record' w={'33.3%'}>
                        <Stack direction={'column'}>
                            <Box mb={['10px', '10px', '20px', '20px']}><Text fontWeight={'bold'}>Screen Record</Text></Box>
                            <Box mb={['10px', '10px', '20px', '20px']}><Text>Browser Window</Text></Box>
                            <Box mb={['10px', '10px', '20px', '20px']}><Text>Desktop</Text></Box>
                            <Box><Text>Application</Text></Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
}

export default Footer;