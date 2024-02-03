import { HStack, Box, Text, Link, Button, useColorMode } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail, MdLightMode, MdDarkMode } from 'react-icons/md';
import HeroIntroduction from './components/HeroIntroduction'
import avatarUrl from './assets/avatar.png'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <HeroIntroduction title="Hey, I'm Keith!" avatar={avatarUrl}>
        <Text fontSize='xl'>
          I build cool solutions out of your ideas!
        </Text>
        <Text fontSize='xl'>
          ..trust me, I'm a software engineer.
        </Text>

        <Box p={2} />

        <HStack>
          <Link href='https://github.com/kaioru' isExternal={true}>
            <Button leftIcon={<FaGithub />}>Github</Button>
          </Link>
          <Link href='https://linkedin.com/in/kaioru/' isExternal={true}>
            <Button leftIcon={<FaLinkedin />}>Linkedin</Button>
          </Link>
          <Link href='mailto://keith@kaioru.co' isExternal={true}>
            <Button leftIcon={<MdOutlineEmail />}>Email</Button>
          </Link>
          <Button onClick={toggleColorMode} >
            {
              colorMode == 'dark'
                ? <MdLightMode />
                : <MdDarkMode />
            }
          </Button>
        </HStack>
      </HeroIntroduction>
    </>
  )
}

export default App;
