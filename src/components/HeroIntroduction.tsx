import { ReactNode } from 'react';
import { Box, VStack, Heading, Image, Show, Hide } from '@chakra-ui/react'
import Hero from './Hero';

type Props = {
  title: string,
  avatar: string,
  children: ReactNode,
}

function HeroIntroduction({ title, avatar, children }: Props) {
  return (
    <>
      <Hero>
        <Show below='lg'>
          <VStack>
            <Image boxSize='20vh' src={avatar} />
            <Box p={2} />
            <Heading
              as='h1'
              size='3xl'
              bgGradient='linear(to-r, green.800, blue.900)'
              bgClip='text'
            >
              {title}
            </Heading>
            {children}
          </VStack>
        </Show>

        <Hide below='lg'>
          <Box padding={20}>
            <Heading
              as='h1'
              size='3xl'
              bgGradient='linear(to-r, green.800, blue.900)'
              bgClip='text'
            >
              {title}
            </Heading>
            {children}
          </Box>
          <Box padding={20}>
            <Image boxSize='40vh' src={avatar} />
          </Box>
        </Hide>
      </Hero>
    </>
  )
}

export default HeroIntroduction;
