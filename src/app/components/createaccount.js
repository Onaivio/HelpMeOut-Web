'use client'

import React from "react";
import { Stack, Box, Text, Button } from '@chakra-ui/react';
import {
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor,
} from '@chakra-ui/react';
import Link from 'next/link';
import Popover1 from '../components/popover';
const Create = () => {
    return (
        <Stack bg={'rgba(231, 231, 237, 0.20)'} mt={'50px'} mb={'50px'}>
            <Box textAlign={'center'} m={'auto'} pt={'50px'} pb={'50px'}>
                <Text fontWeight={'bold'} color={'#141414'}>To ensure the availability and privacy of your video, we recommend saving it to your account.</Text>

                <Popover placement='top-start'>
                    <PopoverTrigger>
                        <Button bg={'#120B48'} p={'20px'} mt={'40px'} mb={'40px'} color={'white'} w={'90px'}>
                            Send
                        </Button> 
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton color={'#120B48'} />
                        <PopoverBody> <Popover1 /> </PopoverBody>
                    </PopoverContent>
                </Popover>
                <Text fontWeight={'bold'} color={'#7E7E7E'}>Don’t have an account? <Link href={'../login'}><span style={{ color: '#120B48', textDecorationLine: 'underline', }}>Create account</span></Link></Text>
            </Box>
        </Stack>
    );
}

export default Create;