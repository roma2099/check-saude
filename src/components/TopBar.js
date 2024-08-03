import { Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = ({ drawerWidth, toggleDrawer, title }) => {
    const handleDrawerToggle = () => {
        toggleDrawer(true);
      };
    return (

        <AppBar position="fixed" sx={{

        }}
        >
            <Toolbar>
                {toggleDrawer ? (
                    <IconButton
                        color="inherit" 
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : null}
                <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>{title}</Typography>

                
            </Toolbar>

        </AppBar>
    );
}



export default TopBar;