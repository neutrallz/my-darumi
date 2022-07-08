import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoFacebook, IoLogoWhatsapp } from 'react-icons/io5'
import Image from 'next/image'
import Typed from 'react-typed'
import Learning from './api/skill.js'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mt={5}
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
      Hello, I&apos;m an front end developer based in Indonesia.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} mt={8}>
          <Heading as="h2" variant="page-title">
            Ahmad Fauzi
          </Heading>
          <p>Digital Designer ( Web Design / Editor )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/pict.jpg"
              alt="Profile image"
              borderRadius="full"
              width="150px"
              height="150px"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          Born in 2000, I grew up in the midst of the digital rise. As a teenager
          I started building my first websites and got more and more interested
          in the graphic design and web designer. After school, I started to study
          web developer as a bachelors degree at the Institute of Technology of
          Pagar Alam. There, I learnt everything about how to, develop, and design a
          web. After my studies, I wanna become professional web developer and
          I&apos;m currently learning {' '}
          <Typed
                loop
                typeSpeed={100}
                backSpeed={20}
                strings={Learning}
                smartBackspace
                backDelay={1000}
                loopCount={0}
                showCursor
                cursorChar="|"
        />
        </Paragraph>
        <Box align="center" my={5}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Works
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My hobby
        </Heading>
        <Paragraph>
          Gaming, Music, Design, Coding, and Drink some Coffee.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/darumi00s" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @darumi00s
              </Button>
            </Link>
            <Link href="https://instagram.com/hmdfzzi_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @hmdfzzi_
              </Button>
            </Link>
            <Link href="https://facebook.com/sycletz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                Ahmad Fauzi
              </Button>
            </Link>
            <Link href="https://wa.me/628992490269" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWhatsapp />}
              >
                WhatsApp
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
