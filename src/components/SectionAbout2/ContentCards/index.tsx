import { useContext } from 'react';

import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

import { LocaleContext } from '../../../providers/locale';
import { ThemeContext } from '../../../providers/theme';
import { Container } from './styles';

export function ContentCards() {
  const { t } = useContext(LocaleContext)
  const { activeTheme } = useContext(ThemeContext)

  return (
    <Container color={activeTheme.palette.primary.main}>
      <div className="card">
        <div className="card__header">
          <div className="accordion__icon-div">4+</div>
          <h5>{t.aboutAccordionTitle1}</h5>
        </div>
        {t.aboutAccordionContent1}
      </div>

      <div className="card">
        <div className="card__header">
          <div className="accordion__icon-div">
            <GroupsOutlinedIcon />
          </div>
          <h5>{t.aboutAccordionTitle2}</h5>
        </div>
        {t.aboutAccordionContent2}
      </div>

      <div className="card">
        <div className="card__header">
          <div className="accordion__icon-div">
            <SentimentVerySatisfiedOutlinedIcon />
          </div>
          <h5>{t.aboutAccordionTitle3}</h5>
        </div>
        {t.aboutAccordionContent3}
      </div>

      <div className="card">
        <div className="card__header">
          <div className="accordion__icon-div">
            <TrendingUpOutlinedIcon />
          </div>
          <h5>{t.aboutAccordionTitle4}</h5>
        </div>
        {t.aboutAccordionContent4}
      </div>
    </Container>
  )
}
