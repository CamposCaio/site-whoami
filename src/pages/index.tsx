import type { NextPage } from 'next'
import Head from 'next/head'

import en from '../../public/locales/en-us'
import pt from '../../public/locales/pt-br'
import { useRouter } from 'next/router'
import * as React from 'react'

import { TopNav } from '../components/topNav'
import { Container } from '../styles/pages/home'
import { Button } from '@mui/material'

const Home: NextPage = (props: any) => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en-us' ? en : pt

  return (
    <Container>
      <Head>
        <title>Caio Campos</title>
      </Head>
      <TopNav
        locale={locale}
        router={router}
        activeTheme={props.activeTheme}
        toggleTheme={props.toggleTheme}
      />
      <div className="hero-content">
        <h2>{t.homeTitleL1}</h2>
        <br />
        <h2>{t.homeTitleL2}</h2>
        <br />
        <h1>{t.homeTitleL3}</h1>
        <br />
        <h1>{t.homeTitleL4}</h1>
        <br />
        <Button variant="outlined">
          <a
            href="https://drive.google.com/file/d/1p6rGQDahJ8CTOpQJqX5APrSnQfDnKXUF/view?usp=sharing"
            target="_blank"
          >
            {t.homeButton}
          </a>
        </Button>
      </div>
    </Container>
  )
}

export default Home
