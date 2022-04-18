import React from 'react';

import { useLocale } from '@src/providers/locale';

import { AboutPage1 } from './AboutPage1';
import { AboutPage2 } from './AboutPage2';
import { Container } from './styles';

export function About() {
  const { t } = useLocale()

  return (
    <Container>
      <AboutPage2 />
      {/* <AboutPage1 /> */}
    </Container>
  )
}
