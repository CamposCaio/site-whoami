import { createContext, Dispatch, SetStateAction } from 'react';

import pt from '../../public/locales/pt-br';

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

export const LocaleContext = createContext<PropsLocaleContext>(DEFAULT_VALUE)
