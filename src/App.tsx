import { HStack, Box, Text, Link, IconButton, Button, useColorMode } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail, MdLightMode, MdDarkMode } from 'react-icons/md';
import HeroIntroduction from './components/HeroIntroduction'
import avatarUrl from './assets/avatar.png'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <IconButton
        onClick={toggleColorMode}
        isRound={true}
        icon={
          colorMode == 'dark'
            ? <MdLightMode />
            : <MdDarkMode />
        }
        aria-label={
          colorMode == 'dark'
            ? 'Light Mode'
            : 'Dark Mode'
        }
        position='fixed'
        bottom={8}
        right={8}
      />

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
        </HStack>
      </HeroIntroduction>
    </>
  )
}

export default App;
