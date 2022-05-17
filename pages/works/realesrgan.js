import {
    Container,
    Badge,
    Link,
    List,
    ListItem
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Real-ESRGAN GUI">
      <Container>
        <Title>
          Real-ESRGAN GUI<Badge>2021</Badge>
        </Title>
        <P>
        Un-official Desktop GUI from me to use Real-ERSGAN easily
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Application-GUI</Meta>
            <Link href="https://github.com/darumi00s/realesrgan-unoffgui">
            https://github.com/darumi00s/realesrgan-unoffgui <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/realesrgan.png" alt="realesrgan" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  