import { useState } from 'react';

import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useLocale } from '@providers/locale';

import { Container } from './styles';

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
      role="tabpanel"
      // hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {
        <Box
          sx={{
            p: '2rem 1rem 0 1rem',
            '@media (min-width: 397px)': {
              pl: '4rem',
            },
            maxWidth: '618px',
            transition:
              value === index
                ? 'opacity 0.3s ease-in'
                : 'opacity 0.3s ease-out',
            opacity: value === index ? 1 : 0,
          }}
        >
          {children}
        </Box>
      }
      {/* {value === index && <Box sx={{ pt: '2rem' }}>{children}</Box>} */}
    </div>
  )
}

const CustomTabs = styled(Tabs)({
  boxShadow: 'inset 0 -2px rgba(128,128,128,0.38)',
  flexGrow: '1',
  minHeight: '0',
  height: '2rem',
  '& .MuiTabs-indicator': {},
})

const CustomTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: 400,
  fontSize: '87.5%',
  flexGrow: '1',
  minHeight: '0',
  height: '2rem',
  transition: 'opacity 0.2s',
  '&:hover': {
    opacity: 0.6,
  },
}))

interface StyledTabProps {
  label: string
}

export function CustomTabPanel() {
  const [value, setValue] = useState(0)

  const { t } = useLocale()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <DesktopWindowsOutlinedIcon
          className="tab-panel__icons"
          fontSize="large"
          color={value === 0 ? 'primary' : 'disabled'}
        />
        <CustomTabs
          value={value}
          onChange={handleChange}
          aria-label="ant example"
        >
          <CustomTab label="Front-End" sx={{ alignItems: 'flex-start' }} />
          <CustomTab label="Back-End" />
          <CustomTab label="DevOps" sx={{ alignItems: 'flex-end' }} />
        </CustomTabs>
        <DnsOutlinedIcon
          className="tab-panel__icons"
          fontSize="large"
          color={value === 1 || value === 2 ? 'primary' : 'disabled'}
        />
      </Box>
      <Box sx={{ position: 'relative' }}>
        <TabPanel value={value} index={0}>
          <h3>FRONT-END</h3>
          <p>{t.aboutContent1FrontEnd}</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h3>BACK-END</h3>
          <p>{t.aboutContent1BackEnd}</p>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h3>DevOps</h3>
          <p>{t.aboutContent1DevOps}</p>
        </TabPanel>
      </Box>
    </Container>
  )
}
