import Image from 'next/image'
import { useTheme, Text, Spacer } from '@nextui-org/react'
import styles from '@/styles/navbar.module.css'

export const Navbar = () => {
  const { theme } = useTheme()

  return (
    <nav className={styles.navbar} style={{ background: theme?.colors.gray100.value }}>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/131.svg'
        alt='icon'
        width={40}
        height={40}
      />
      <Text color='white' h2 css={{ marginLeft: '15px' }}>P</Text>
      <Text color='white' h3>okemon</Text>

      <Spacer css={{ flex: 1 }} />
      <Text color='white'>Favoritos</Text>

    </nav>
  )
}