
import PropTypes from 'prop-types';
import { Stack } from '@mui/material'
import { AppHeader } from './AppHeader/AppHeader'

export const Layout = ({ children }) =>
  <Stack>
    <AppHeader />
    {children}
  </Stack>

Layout.propTypes = {
    children: PropTypes.node
}