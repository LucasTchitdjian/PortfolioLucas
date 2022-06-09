import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, Tchitdjian Lucas a front-end developer based in France
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexgrow={1}>
          <Heading as="h2" variant="page-title">
            Lucas Tchitdjian
          </Heading>
          <p>Front-end developpeur</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
