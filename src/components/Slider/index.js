import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate, useLocation } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BiHome, BiTrendingUp, BiNavigation, BiSpreadsheet, BiTargetLock,  } from "react-icons/bi";
import { BsQuestionSquare } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Slider = (props) => {
  const { title, Component } = props;
  const navigate = useNavigate()
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [active, setActive] = useState(['/dashboard', '/businessStatus', '/promote', '/invitation', '/goalChange', '/qa' ].indexOf(location.pathname));
  const matches = useMediaQuery('(min-width:685px)');

  const handleActive = (index) => {
    setActive(index);
  }

  useEffect(() => {
    setOpen(matches);
  }, [matches])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNaviate = () => {
    navigate('/')
  }

  return (
    <Box 
      className='slider' 
      sx={{ 
        display: 'flex',
        "& .MuiBox-root": {
          padding: 0,
          margin: "10px 0",
        }
      }}
    >
      <CssBaseline />
      <AppBar 
        position="fixed" 
        open={open}
        sx={open === true ? {
          "& .MuiToolbar-root": {
            background: "none",
            boxShadow: "none"
          },
         
        } : {
          "& .MuiToolbar-root": {
            opacity: 0.6,
          }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <Typography
              variant="h6" 
              noWrap 
              component="div"
              sx={ open===true && {
                color: "white",
                fontWeight: 600,
                fontSize: 25,
              }}
            >
              {title}
            </Typography>
            <div style={{cursor: "pointer"}} onClick={handleNaviate}>
              <img src='/images/image - Logo.png' />
            </div>
          </div>
       
        </Toolbar>
      </AppBar>
      <Drawer 
        variant="permanent" 
        open={open}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#3786E5",
          }
        }}
      >
        <DrawerHeader
          sx={{
            padding: "20px 0 10px 0",
            position: "relative"
          }}
        >
          <div className={ `${open === true ? "d-flex flex-column aign-items-center m-auto" : "d-flex flex-column aign-items-center m-auto pt-2 mt-5"}`}>
            <div className='user_field'>
              <FaUser size={22} color="rgb(12, 192, 150)" />
            </div>
            <span>User 1</span>
          </div>
          {
            open === true ?
            <div className='draw_icon_field'>
              <IconButton className='draw_icon' onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon className='text-white'/> : <ChevronLeftIcon className='text-white'/>}
              </IconButton>
            </div>
            : ""
          }
        </DrawerHeader>
        <Divider color="white" />
        <List>
          {['Dashboard', 'Business Status', 'Promote', 'Invitation Requests', 'Goal Change', 'Q & A'].map((text, index) => (
            <>
              <ListItem 
                id={`nav-${index}`}
                key={index}
                sx={
                  active === index &&
                  {
                    backgroundColor: "#0f7ce4",
                  }
                }
                className={`${active === index ? 'nav-active' : ''}`}
                disablePadding 
                button
                onClick={() => {
                  handleActive(index);
                  navigate(['/dashboard', '/businessStatus', '/promote', '/invitation', '/goalChange', '/qa' ].filter((url, j)=>(  
                    index === j
                  )).join(''));
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    color: "white"
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {
                      [ <BiHome className='drawer_icon' />, <BiTrendingUp className='drawer_icon' />, <BiNavigation className='drawer_icon' />, <BiSpreadsheet className='drawer_icon' />, <BiTargetLock className='drawer_icon' />, <BsQuestionSquare className='drawer_icon' /> ].map((icon, i) => (
                        index === i && icon
                      )) 
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />  
        <Component />
      </Box>
    </Box>
  );
}

export default Slider
