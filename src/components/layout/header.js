import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Switch from '@mui/material/Switch';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingIcon from '@mui/icons-material/ShoppingCart';
import AccountIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DarkModeIcon from '@mui/icons-material/Brightness4';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Images } from '../images';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  const [state, setState] = useState(false);
  const categoryList = [
    {
      img: Images.category_stores,
      title: 'Stores'
    },
    {
      img: Images.category_real_estate,
      title: 'Real estate'
    },
    {
      img: Images.category_cars,
      title: 'Cars'
    },
    {
      img: Images.category_vehicles,
      title: 'Vehicles'
    },
    {
      img: Images.category_repair_parts,
      title: 'Repair parts'
    },
    {
      img: Images.category_phones,
      title: 'Phones'
    },
    {
      img: Images.category_phone_accessories,
      title: 'Phone accessories'
    },
    {
      img: Images.category_computers,
      title: 'Computers & Accessories'
    },
    {
      img: Images.category_electronics,
      title: 'Electronics & Home appliance'
    },
    {
      img: Images.category_clothing,
      title: 'Clothings'
    },
    {
      img: Images.category_fashion,
      title: 'Fashion accessories'
    },
    {
      img: Images.category_cosmetics_beauty,
      title: 'Cosmetics & Beauty'
    },
    {
      img: Images.category_home_fournitures,
      title: 'Home & Fournitures'
    },
    {
      img: Images.category_hobbies_entertainment,
      title: 'Hobbies & Entertainment'
    },
    {
      img: Images.category_job_offers,
      title: 'Job offers'
    },
    {
      img: Images.category_job_applications,
      title: 'Job applications'
    },
    {
      img: Images.category_materials_equipment,
      title: 'Materials & Equipment'
    },
    {
      img: Images.category_services,
      title: 'Services'
    },
    {
      img: Images.category_travel,
      title: 'Travel'
    },
    {
      img: Images.category_various,
      title: 'Various'
    },
  ]

  const linkList = [
    {
      title: 'Bootlis Stores',
      url: '/#'
    },
    {
      title: 'Bootlis Ads',
      url: '/#'
    },
    {
      title: 'Privacy policy',
      url: '/#'
    },
    {
      title: 'Legal informations',
      url: '/#'
    },
    {
      title: 'Contact',
      url: '/#'
    },
    {
      title: 'Autobip.com',
      url: '/#'
    },
  ]

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      role="presentation"
      className="navbar"
    >
      <div className="login-container d-flex align-items-center justify-content-between">
        <Link className="login-link d-flex align-items-center" to="/">
          <AccountIcon sx={{ width: 40, height: 40 }} />
          <label className="d-block ml-16">LogIn</label>
        </Link>
        <CloseIcon className="cursor-pointer" onClick={toggleDrawer(false)} />
      </div>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DarkModeIcon />
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
            <Switch />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <label className="nav-section-title d-flex px-16">Categories</label>
        {categoryList.map((category) => (
          <ListItem key={category.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={category.img} className="category-img" alt="category img" />
              </ListItemIcon>
              <ListItemText primary={category.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <label className="nav-section-title d-flex px-16">Useful links</label>
        {linkList.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Toolbar className="justify-content-center">
        <IconButton
          size="large"
          edge="start"
          color="default"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="default"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="default"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <LinkedInIcon />
        </IconButton>
      </Toolbar>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" className="header-appbar">
        <Toolbar className="header-toolbar">
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer(true)} />
          </IconButton>

          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
          </Link>

          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <ShoppingIcon />
          </IconButton>

          <Link to="/login">
            <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <PersonIcon />
            </IconButton>
          </Link>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <p>Bootlis</p>
          </Typography>

          <Search className="search-container">
            <SearchIconWrapper className="search-icon">
              <SearchIcon sx={{ color: "#e00000" }} />
            </SearchIconWrapper>
            <StyledInputBase
              className="search-input-container"
              placeholder="Your search"
              inputProps={{ 'aria-label': 'search', 'id': 'search-input' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor='left'
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        className="navbar-drawer"
      >
        {list()}
      </SwipeableDrawer>
    </Box>
  );
}

export default Header