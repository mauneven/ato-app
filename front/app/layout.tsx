import '@mantine/core/styles.css';
import '@mantine/carousel';
import '@mantine/code-highlight'
import '@mantine/dates'
import '@mantine/hooks'
import '@mantine/tiptap'

import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
import { Navbar } from '@/components/navigation/Navbar';

import classes from './globals.module.css'
export const metadata = {
  title: 'Want',
  description: 'Want',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme='dark'>
            <Navbar/>
            <Container fluid pt={70} pb={40} classNames={{root: classes.globalContainer}}>
            {children}
            </Container>
        </MantineProvider>
      </body>
    </html>
  );
}