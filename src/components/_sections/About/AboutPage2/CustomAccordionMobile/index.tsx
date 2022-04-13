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
    <Container color={activeTheme.palette.primary.main}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="accordion__icon-div">4+</div>
          <h5>{t.aboutAccordionTitle1}</h5>
        </AccordionSummary>
        <AccordionDetails>{t.aboutAccordionContent1}</AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="accordion__icon-div">
            <GroupsOutlinedIcon />
          </div>
          <h5>{t.aboutAccordionTitle2}</h5>
        </AccordionSummary>
        <AccordionDetails>{t.aboutAccordionContent2}</AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="accordion__icon-div">
            <SentimentVerySatisfiedOutlinedIcon />
          </div>
          <h5>{t.aboutAccordionTitle3}</h5>
        </AccordionSummary>
        <AccordionDetails>{t.aboutAccordionContent3}</AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className="accordion__icon-div">
            <TrendingUpOutlinedIcon />
          </div>
          <h5>{t.aboutAccordionTitle4}</h5>
        </AccordionSummary>
        <AccordionDetails>{t.aboutAccordionContent4}</AccordionDetails>
      </Accordion>
    </Container>
  )
}
