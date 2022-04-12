import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

import Paper from '@mui/material/Paper';

import { useLocale } from '../../providers/locale';
import { useTheme } from '../../providers/theme';
import { Container, Content } from './styles';

let card = 1

export function SectionTechnologies() {
  const { t } = useLocale()
  const { activeTheme } = useTheme()
  const [cardsTitle, setCardsTitle] = useState(t.technologiesCard1)
  const [cardsContent, setCardsContent] = useState(t.technologiesCard1Content)

  useEffect(() => {
    setCardsTitle(t[`technologiesCard${card}`])
    setCardsContent(t[`technologiesCard${card}Content`])
  }, [t])

  function handleCardClick(_card: number) {
    card = _card
    const cards = document.getElementsByClassName('technologies__card')

    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('card-active')
    }

    document.getElementById(`card-${_card}`).classList.add('card-active')

    setCardsTitle(t[`technologiesCard${_card}`])
    setCardsContent(t[`technologiesCard${_card}Content`])
  }

  return (
    <Container id="technologies">
      <Fade bottom>
        <Content color={activeTheme.palette.text.disabled}>
          <h2>{t.technologiesTitle}</h2>
          <h6>{t.technologiesSubtitle}</h6>
          <Paper elevation={4}>
            <div className="technologies__container-cards">
              <div className="technologies__container-grid">
                <div
                  className="technologies__card card-active"
                  onClick={() => handleCardClick(1)}
                  id="card-1"
                ></div>
                <div
                  className="technologies__card"
                  onClick={() => handleCardClick(2)}
                  id="card-2"
                ></div>
                <div
                  className="technologies__card"
                  onClick={() => handleCardClick(3)}
                  id="card-3"
                ></div>
                <div
                  className="technologies__card"
                  onClick={() => handleCardClick(4)}
                  id="card-4"
                ></div>
                <div
                  className="technologies__card"
                  onClick={() => handleCardClick(5)}
                  id="card-5"
                ></div>
                <div
                  className="technologies__card"
                  onClick={() => handleCardClick(6)}
                  id="card-6"
                ></div>
                <div
                  className="technologies__card"
                  onClick={() => handleCardClick(7)}
                  id="card-7"
                ></div>
                <div
                  className="technologies__card"
                  onClick={() => handleCardClick(8)}
                  id="card-8"
                ></div>
                <div
                  className="technologies__card"
                  onClick={() => handleCardClick(9)}
                  id="card-9"
                ></div>
              </div>
              <div className="technologies__card-description">
                <h3>{cardsTitle}</h3>
                <p>{cardsContent}</p>
              </div>
            </div>
          </Paper>
        </Content>
      </Fade>
    </Container>
  )
}
