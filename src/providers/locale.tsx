import { useRouter } from 'next/router';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';

import en from '@public/locales/en-us';
import pt from '@public/locales/pt-br';

import { getCookie } from '../pages/_app';

type PropsLocaleContext = {
  t: typeof pt
  locale: string
  setLocale: Dispatch<SetStateAction<string>>
}

const DEFAULT_VALUE = {
  t: pt,
  locale: 'pt-br',
  setLocale: () => {},
}

const LocaleContext = createContext<PropsLocaleContext>(DEFAULT_VALUE)

export function useLocale() {
  return useContext(LocaleContext)
}

export function LocaleProvider({ children }) {
  const router = useRouter()
  const { pathname, query, asPath } = router
  const [locale, setLocale] = useState(router.locale)
  const [t, setT] = useState(router.locale === 'pt-br' ? pt : en)

  useEffect(() => {
    const cookieLocale = getCookie('savedLocale')

    if (cookieLocale !== '' && cookieLocale !== locale) {
      setLocale(cookieLocale)
      router.push({ pathname, query }, asPath, { locale: '' })
    }
  }, [])

  useEffect(() => {
    document.cookie = `savedLocale=${locale}; SameSite=Lax; Secure`
    locale === 'pt-br' ? setT(pt) : setT(en)
  }, [locale])

  return (
    <LocaleContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}
