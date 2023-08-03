"use client"
import './globals.css'
import { SetStateAction, useState, Dispatch } from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Box, Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { appTheme } from './appTheme';
import VerticalNav from '@/app/components/VerticalNav'
import SecondaryNav from '@/app/components/SecondaryNav'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSecondaryNav, setShowSecondaryNav] = useState<boolean>(false);
  return (
    <html lang="en">
      <head>
        <title>Queens Road Bank: Bank developed by Anmol Tiwari</title>
      </head>
      <ThemeProvider theme={appTheme}>
      <body className={inter.className}>
        <Container>
            <VerticalNav setShowSecondaryNav={setShowSecondaryNav} />
            <SecondaryNav showSecondaryNav={showSecondaryNav} setShowSecondaryNav={setShowSecondaryNav} />
            <Box component='main'>
              {children}
            </Box>
        </Container>
      </body>
      </ThemeProvider>
    </html>
  )
}
