import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1]} gap={6}>
        <Section>
          <Box w="100%" textAlign="center">
            <NextLink href={`/works/yorikoform`} passHref scroll={false}>
              <LinkBox cursor="pointer">
                <Image
                  src={'/images/yorikoform.png'}
                  alt={'yorikoform'}
                  className="grid-item-thumbnail"
                  width={1025}
                  height={511}
                />
                <LinkOverlay href={`/works/yorikoform`}>
                  <Text mt={2} fontSize={20}>
                    {'yorikoform'}
                  </Text>
                </LinkOverlay>
                <Text fontSize={14}>A login form with expressJs and mongoDB stack for database, you
                  can register or login already.</Text>
              </LinkBox>
            </NextLink>
          </Box>
        </Section>
        <Section>
        <Box w="100%" textAlign="center">
            <NextLink href={`/works/realesrgan`} passHref scroll={false}>
              <LinkBox cursor="pointer">
                <Image
                  src={'/images/realesrgan.png'}
                  alt={'realesrgan'}
                  className="grid-item-thumbnail"
                  width={698}
                  height={348}
                />
                <LinkOverlay href={`/works/realesrgan`}>
                  <Text mt={2} fontSize={20}>
                    {'realesrgan'}
                  </Text>
                </LinkOverlay>
                <Text fontSize={14}>Un-official Desktop GUI from me to use Real-ERSGAN easily</Text>
              </LinkBox>
            </NextLink>
          </Box>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
