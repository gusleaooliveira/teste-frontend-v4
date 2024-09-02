'use client';
import React from 'react'; 
import { MantineProvider, Box } from '@mantine/core';
import { Inter } from 'next/font/google';
import Faq from '@/components/faq';
  
 

export default function FaqPage() {
  return ( 
        <Box style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <Faq />
        </Box> 
  );
}
