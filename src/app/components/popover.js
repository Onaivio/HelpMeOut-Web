'use client'

import React from "react";
import { Stack, Box, Text, Heading, Img, Button } from '@chakra-ui/react';
import Link from 'next/link';
const Popover1 = () => {
    return (
        <Stack justify={'center'}>
            <Box><Img src='/success-kite.png' /></Box>
            <Box>
                <Text textAlign={'center'}>Your video link has been sent to <span style={{ color: '#120B48', }}>johnmark@gmail.com</span></Text>
            </Box>
            <Box textAlign={'center'} m={'auto'} pt={'50px'} pb={'50px'}>
                <Text color={'#141414'} textAlign={'center'}>Would you need to view this video later? Save to your account now!</Text>
                <Button bg={'#120B48'} p={'20px'} mt={'40px'} mb={'40px'} color={'white'}>
                    Save Video
                </Button>
                <Text color={'#7E7E7E'} textAlign={'center'}>Don’t have an account? <Link href={'../login'}><span style={{ color: '#120B48', }}>Create account</span></Link></Text>
            </Box>
        </Stack>
    );
}

export default Popover1;