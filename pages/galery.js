import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

const Galery = () => (
    <Layout title="Galery">
    <Container>
        <Heading as="h3" fontSize={20} mb={5}>
        My Galery
        </Heading>
        <SimpleGrid columns={[1]}>
        <Section>
            <Box w="100%" textAlign="center">
            <Image
                src={`/images/galery/1.jpg`}
                alt={'galery'}
                className="grid-item-thumbnail"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
            />
            <Image
                src={`/images/galery/2.jpg`}
                alt={'galery'}
                className="grid-item-thumbnail"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
            />
            <Image
                src={`/images/galery/3.jpg`}
                alt={'galery'}
                className="grid-item-thumbnail"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
            />
            <Image
                src={`/images/galery/4.jpg`}
                alt={'galery'}
                className="grid-item-thumbnail"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
            />
            <Image
                src={`/images/galery/5.jpg`}
                alt={'galery'}
                className="grid-item-thumbnail"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
            />
            <Image
                src={`/images/galery/6.jpg`}
                alt={'galery'}
                className="grid-item-thumbnail"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
            />
            </Box>
        </Section>
        </SimpleGrid>
    </Container>
    </Layout>
)

export default Galery
export { getServerSideProps } from '../components/chakra'
