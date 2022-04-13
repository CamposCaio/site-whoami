import React from 'react';

import { useLocale } from '@src/providers/locale';

import { AboutPage1 } from './AboutPage1';
import { AboutPage2 } from './AboutPage2';
import { Container } from './styles';

export function About() {
  const { t } = useLocale()

  return (
    <Container>
      <div id="sticky-container">
        <h2>{t.aboutTitle}</h2>
      </div>
      <AboutPage1 />
      <AboutPage2 />
    </Container>
  )
}
