import { useState } from 'react';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import { useLocale } from '@providers/locale';
import { useTheme } from '@providers/theme';

import { Container } from './styles';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0)',
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  '.MuiAccordionSummary-content': {
    alignItems: 'center',
    margin: '0.25rem 0',
  },
  padding: 0,
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiPaper-root': {
    opacity: 0,
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '1rem 0 2rem 0',
}))

export function CustomAccordionMobile() {
  const [expanded, setExpanded] = useState<string | false>('panel1')

  const { t } = useLocale()

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  const { activeTheme } = useTheme()

  return (
    <Container>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="card-title__number">
            <h3>1</h3>
          </div>
          <h3>{t.about2Card1Title}</h3>
        </AccordionSummary>
        <AccordionDetails>{t.about2Card1Content}</AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="card-title__number">
            <h3>2</h3>
          </div>
          <h3>{t.about2Card2Title}</h3>
        </AccordionSummary>
        <AccordionDetails>{t.about2Card2Content}</AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="card-title__number">
            <h3>3</h3>
          </div>
          <h3>{t.about2Card3Title}</h3>
        </AccordionSummary>
        <AccordionDetails>{t.about2Card3Content}</AccordionDetails>
      </Accordion>
    </Container>
  )
}
