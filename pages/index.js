import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        mt={2}
        align="center"
      >
        Hello, I am Tchitdjian Lucas a front-end developer based in France
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexgrow={1}>
          <Heading as="h2" variant="page-title">
            Lucas Tchitdjian
          </Heading>
          <p>Front-end developpeur</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profil-picture.jpg"
            alt="profile picture"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
          quasi. Repellat eaque rem aperiam dolore itaque temporibus autem natus
          suscipit?{' '}
          <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Marseille, France.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed BTS in Jean Perrin, Marseille
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>Movies, Music</Paragraph>
      </Section>
    </Container>
  )
}

export default Page
