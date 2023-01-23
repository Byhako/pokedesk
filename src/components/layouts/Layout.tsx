import { FC, ReactNode } from "react"
import Head from "next/head"
import { Navbar } from "../ui"

type Props = {
  children: ReactNode
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='description' content={`Informacion dobre el pokemon ${title}`} />
      </Head>
      
      <Navbar />

      <main style={{ padding: '0 20px' }}>
        {children}
      </main>

    </>
  )
}
