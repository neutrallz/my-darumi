import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NextLink from 'next/link'

const Download = () => (
  <Layout title="Download">
    <Container>
      <Heading as="h3" fontSize={20} mb={6} mt={3}>
          Download CV
      </Heading>
      <Section delay={0.3}>
        <Heading as="h3" fontSize={30} mb={3}>Sorry, page not found.</Heading>
        <Text>This page is on development, please be patient 🙌.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
          <NextLink href="/" passHref>
            <Button colorScheme="teal">Back to home.</Button>
          </NextLink>
        </Box>
      </Section>


    </Container>
  </Layout>
)

export default Download
export { getServerSideProps } from '../components/chakra'