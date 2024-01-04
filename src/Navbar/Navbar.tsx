import { AppBar, Button, Toolbar, Typography, Link as RouterLink } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h6' component="div" sx={{ flexGrow: 1}}>Asset Manager</Typography>
        <Button color='inherit' onClick={() => navigate('/login')}>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
