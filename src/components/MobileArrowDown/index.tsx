import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import { enableHandleScroll, scrollTo } from '../SnapScroll';
import { Container } from './styles';

function handleNavigation() {
  const page = Math.round(window.scrollY / window.innerHeight) + 1
  enableHandleScroll(false)
  scrollTo(page * window.innerHeight)
}

export default function MobileArrowDown() {
  return (
    <Container>
      <ArrowDropDownOutlinedIcon onClick={handleNavigation} />
    </Container>
  )
}
