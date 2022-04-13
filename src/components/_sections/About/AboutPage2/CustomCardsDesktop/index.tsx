import Fade from 'react-reveal/Fade';

import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import Paper from '@mui/material/Paper';
import { useLocale } from '@providers/locale';
import { useTheme } from '@providers/theme';

import { Container } from './styles';

export function CustomCardsDesktop() {
  const { t } = useLocale()
  const { activeTheme } = useTheme()

  return (
    <Container color={activeTheme.palette.primary.main}>
      <Fade bottom>
        <Paper elevation={4}>
          <div className="accordion__icon-div">4+</div>
          <h5>{t.aboutAccordionTitle1}</h5>
          {t.aboutAccordionContent1}
        </Paper>

        <Paper elevation={4}>
          <div className="accordion__icon-div">
            <GroupsOutlinedIcon />
          </div>
          <h5>{t.aboutAccordionTitle2}</h5>
          {t.aboutAccordionContent2}
        </Paper>

        <Paper elevation={4}>
          <div className="accordion__icon-div">
            <SentimentVerySatisfiedOutlinedIcon />
          </div>
          <h5>{t.aboutAccordionTitle3}</h5>
          {t.aboutAccordionContent3}
        </Paper>

        <Paper elevation={4}>
          <div className="accordion__icon-div">
            <TrendingUpOutlinedIcon />
          </div>
          <h5>{t.aboutAccordionTitle4}</h5>
          {t.aboutAccordionContent4}
        </Paper>
      </Fade>
    </Container>
  )
}
