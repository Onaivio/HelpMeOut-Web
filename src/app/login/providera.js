'use client'
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Form from '../components/form';

export function Providersa({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Form />
      </ChakraProvider>
    </CacheProvider>
  );
}
