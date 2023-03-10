import { useState } from 'react'
import { AppBar, IconButton, Button, Typography, Toolbar, Menu, MenuItem } from '@mui/material'
import MovieFilterIcon from '@mui/icons-material/MovieFilter'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

export const AppHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <MovieFilterIcon />
          <Typography variant='h6' sx={{ flexGrow: 1 }}>Movie Store</Typography>
          <Button color='inherit' onClick={() => window.alert('Login logic goes here')}>Login</Button>
        </Toolbar>
      </AppBar>

      <Menu
        id='menu'
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <MenuItem component={Link} to='/'>Search</MenuItem>
        <MenuItem component={Link} to='favourites'>Favourites</MenuItem> {/* todo this does not exist */}
      </Menu>
    </>
  )
}
