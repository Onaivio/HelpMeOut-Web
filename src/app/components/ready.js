'use client'

import React, { useState, useEffect } from 'react';
import {
    Stack,
    Box,
    Text,
    Heading,
    Img,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Divider,
} from '@chakra-ui/react';
import {
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor,
} from '@chakra-ui/react';
import Popover1 from '../components/popover';
import { EditIcon, CopyIcon } from '@chakra-ui/icons';

const Ready = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the list of videos from the provided endpoint
        fetch('https://chrome-extension-2njn.onrender.com/videoupload/')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((videoList) => {
                // Sort the videos by creation timestamp (you may need to adjust the property)
                videoList.sort((a, b) => b.timestamp - a.timestamp);

                // Get the latest video
                const latestVideo = videoList[0];

                // Create a video URL from the latest video's URL
                setVideoUrl(latestVideo.url);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching video:', error);
                setLoading(false);
            });
    }, []);

    return (
        <Stack
            direction={['column', 'column', 'row', 'row']}
            minH={'100vh'}
            p={'50px'}
        >
            {/* Left side */}
            <Box w={['100%', '1005', '50%', '50%']}>
                <Heading color={'#141414'} size={'lg'} mb={'20px'}>
                    Your video is ready!
                </Heading>

                <Text fontSize={'15px'}>Name </Text>
                <Text color={'#413C6D'} fontWeight={'bold'} mb={'50px'}>
                    Untitled_Video_20232509 <EditIcon color={'#413C6D'} />{' '}
                </Text>

                {/* Enter email */}
                <InputGroup size="md" mb={'50px'} w={'90%'}>
                    <Input
                        pr="4.5rem"
                        type="email"
                        placeholder="enter email of receiver"
                    />
                    <InputRightElement width="4.5rem">

                        <Popover placement='bottom'>
                            <PopoverTrigger>
                                <Button h="1.75rem" size="sm" bg={'#605C84'}>
                                    Send
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton color={'#120B48'} />
                                <PopoverBody> <Popover1 /> </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </InputRightElement>
                </InputGroup>

                {/* Video url */}
                <Heading color={'#141414'} size={'sm'} mb={'10px'}>
                    Video Url
                </Heading>
                <InputGroup size="md" mb={'50px'} w={'90%'}>
                    <Input
                        pr="4.5rem"
                        type="email"
                        placeholder="https://www.helpmeout/Untitled_Video_20232509"
                    />
                    <InputRightElement width="4.5rem">
                        <Button
                            h="1.75rem"
                            size="sm"
                            border={'1px solid'}
                            borderColor={'#605C84'}
                            bg={'white'}
                            color={'#605C84'}
                        >
                            <CopyIcon color={'#605C84'} /> Copy
                        </Button>
                    </InputRightElement>
                </InputGroup>

                {/* Share your video */}
                <Heading color={'#141414'} size={'sm'} mb={'10px'}>
                    Share your video
                </Heading>
                <Stack direction={'row'} w={'75%'}>
                    <Box>
                        <Img src="/fbbutton.png" />
                    </Box>
                    <Box>
                        <Img src="/whbutton.png" />
                    </Box>
                    <Box>
                        <Img src="/telbutton.png" />
                    </Box>
                </Stack>
            </Box>

            {/* Right side */}
            <Box
                w={['100%', '100%', '50%', '50%']}
                borderLeft={['none', 'none', '2px solid', '2px solid']}
                borderColor={'#BBBBBB'}
            >
                <Stack direction={'column'} p={['', '', '40px', '40px']}>
                    {loading ? (
                        <Box>Loading...</Box>
                    ) : (
                        <video src={videoUrl} controls width="100%" />
                    )}
                    <Box>
                        <Img src="/transcript.png" />
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Ready;
