import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Darumi's homepage" />
        <meta name="author" content="Ahmad Fauzi" />
        <meta name="author" content="darumi00s" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta property="og:site_name" content="Ahmad Fauzi" />
        <meta name="og:title" content="Ahmad Fauzi" />
        <meta property="og:type" content="website" />
        <title>Ahmad Fauzi - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
