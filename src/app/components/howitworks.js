'use client'

import { Stack, Box, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';

const HowItWorks = () => {
    return (
        <>
        {/** heading */}
            <Box p={'50px'}>
                <Heading color={'#141414'} textAlign={'center'}>How It Works</Heading>
            </Box>

        {/** content */}
            <Stack 
            direction={['column', 'column', 'row', 'row']}
            pr={'50px'}
            pl={'50px'}
            pb={'50px'}
            >
                <Box className='part1' textAlign={'center'} w={'90%'}>
                <Img src='Icon1.png' m={'auto'} />
                    <Stack direction={'column'}>
                        <Box>
                            <Heading color={'#100A42'} p={'15px'} size={'md'}>Record Screen</Heading>
                            <Text color={'grey'} fontSize={'15px'}>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</Text>
                        </Box>
                        <Box pt={'30px'}><Img src='hiwimg.png' m={'auto'} /></Box>
                    </Stack>
                </Box>
                <Box className='part2' textAlign={'center'} w={'90%'}>
                <Img src='Icon2.png' m={'auto'} />
                    <Stack direction={'column'}>
                        <Box>
                            <Heading color={'#100A42'} p={'15px'} size={'md'}>Share Your Recording</Heading>
                            <Text color={'grey'} fontSize={'15px'}>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</Text>
                        </Box>
                        <Box pt={'30px'}><Img src='hiwimg.png' m={'auto'} /></Box>
                    </Stack>
                </Box>
                <Box className='part3' textAlign={'center'} w={'90%'}>
                <Img src='Icon3.png' m={'auto'} />
                    <Stack direction={'column'}>
                        <Box>
                            <Heading color={'#100A42'} p={'15px'} size={'md'}>Learn Effortlessly</Heading>
                            <Text color={'grey'} fontSize={'15px'}>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</Text>
                        </Box>
                        <Box pt={'30px'}><Img src='hiwimg.png' m={'auto'} /></Box>
                    </Stack>
                </Box>
            </Stack>
        </>
    );
}

export default HowItWorks;