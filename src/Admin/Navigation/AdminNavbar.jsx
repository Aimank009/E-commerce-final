import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/Auth/Action';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function AdminNavbar({handleSideBarViewInMobile}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    // handleCloseUserMenu();
    dispatch(logout());
    navigate("/")
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
// https://res.cloudinary.com/ddkso1wxi/image/upload/v1675919455/Logo/Copy_of_Zosh_Academy_nblljp.png
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + isLargeScreen, backgroundColor: 'rgb(0, 0, 22)' }}>
        <Toolbar>
          {!isLargeScreen && <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleSideBarViewInMobile}
          >
            <MenuIcon />
          </IconButton>}
          <Avatar alt="Zosh" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAApVBMVEX///8AGy/8+/wJHTRudHuNkZfc3uHW2NwAAA0YJjZQWGX///1JVWEUJDfb3d6ytbkAABFYYGrS1NURIjgAESvr6uqkqq4AESeRmJ719PVMUFoiMD9FTVgnMEEAAABATFwAAB8AABsAABceLD9la3Odnqa9v8MAFCZ9gogAACPJy8w7RlPIzdQvO0knNT0MHzAcKkQ0P0YAAytRX2MWGC0nKj4bKjUQWTM8AAAGyklEQVR4nO3ca3uiOBQAYEDQHmO0qNwMtmiAIpRhZ3an//+nLZcOIupuVQTsc975AqGjiZDLSaKCgBBCCCGEEEIIIYQQQgghhBBCCCGEEEKonyyB6OprSVXepa6zdIM5dSiUFsYzeFrXeboS0V4oAw48lx4Ag90k7DpbV3ITHgdmKXCjhIls1nW2rmItGDOrtcTyA07pj4e8N/ME7KlASmmSpUc0+fmI9WaaQFS/C5Iew07pJDu3kdIWzJ0eJhESpI2C1VGObqHs0sZsXZj4eRIRRhEkD9kGTAacQdE002c3vx9EkIG6XWfsGlYQsT8+NnKR6AGNHrEJSBuBmZ7zXMaeitZguObMF0jHGbvCPstTlVI1TyIrCsojFqZCZ/wtqzVEUAYL9RHbs4q5DWLRor3v6FH/81iI5CaLoDjecK53m5ubKRxei5GaO1gGt0c2pMtqFzKI5/mRv4VXf3gjrcNAjxArAu5lrRjRjDU4Tzd5fhZV3xK6axRdSuXi3cfLSgB6JZZs3Snp7FnTDToeZgfEV8e3WlGRieNRZzVHc3icN85EGI5uNfcDhw3ku4+LiGCdJMQAZnNvYylL/uE393pnaPbqpHX6UTbX9RNLTcTg7kOJwDlTZ1mSPuXN8TdUHTb4eifNtueaoKTRh3xoQDz9/z+7CRH82Rl+oxV2+kajexemLUR3FupjhnnHpDF9Mx88ligNd1nI+k0oyxYas7YkfKA8dvT9ByGjJxZ/m6csGAzcu1b//UDsM3SSjkdoTb0V+4vecdKaCDOlZIZZcUamUjdrqDj+gsd3nBYh2otRcn6kfbNlb4ya5WbezLvJFNQ7Rs5pYZZlprc/s8KMt8taYRynmcJoNnDzjlFz+pjt1/w+HzPPrPOb+ThnDPh9x2WkUtHzD40cNQBSEx9mGivLCxg38Eo9QITRiv569InEks7ZyyPvkKiyAnHwd9eZaMrcBuch1xJPmSXw8V3CMi0QjaDrTDRltOa7x17h2SOzHbS1xkuEye/1gd9u9tbS+CM/++fWDsJyk6XSVvA/e+G1+bJFNi3rbYpk/nJjRkZvrKER3he8/8PZoThrR8PfxQm3b+zuvB1122rLiODrNX6+8vAn+cZZCOsnGF7X3T85cXSN0eauYVmbiBAY9P7rMu0ggsEX3oPv8Cj5Do/C/hXmquXVYcxEt+vqf4p0MU3nHPq4AZdIyuRCNl0C3HO67HrTF3opTgeswUXeM6xROC+N8md69HmWX55XhMV1QTPWaz5YXsCgdnD3+WVieatXuzTOHmp//HmWnlieXfE6KYaakk1B1c8tGZ5eR5y3MMCc2mJlXClme/5koxhWGnY2ZWdULnPjcy5ST1vZ/i1KEit4qe7T8dI03yiSXvRsAuLg8tYr/pcWw51n8q8jWVpFkVQcW8eXy8HI7JmJ4wuHJp3uM/svVvDGkp0Zzr9sNOrhnfykyRSYsX2+gKH3sf/PaUqUJHTxVXTBueN1nemzSGi6rvp1EedxazHzhdLqLGnTC4Qx0PuPAdoiJ+K3mQAUAlGUW3kj6UxD02TXEH3Qlu6MFAbygaCYepjXkq8XMb5uZy8D0dSNeGCTd/Da2BEbQnlLT1maa3c5OLDMd4Rpai35ammn5La1+4eE9U0M+aqzdJR8NVNvbTxD6nF9Wfkvj/dPa6sk6HuRhmF4NqTJntFh+P4IG/4IISN5+ZSO62mgne5YteBXNu5fytO+xmSfiGB5YADQ9N8SZsd1m5AZXzLI/sLYpWFMn8tDLGXLgdnpuJ4CbI5XByVPBEheVdXmwJ9MqbcRs5DtsjaYOPFCbRiaEbBNbdGFCD4DMVLeh8PQiyh76+Gs7N40/djV9/xQ8m1KV7XuUJssklUxDpPCCUAPp6X2zB3Y5d2YMQ61j97fVnZhh+n1Pgdla54o+1qvQn1oL4tisG+0Zbro5VLGpycel/eCCCbQ2reEP4BW7pW/g3F/+xvrCaL3PydEmFE6PizMG1R3YQ8duurrTEZaqZ8OMqsfFSY5WFZ6d2iP74yw49zbdx1ZnTi8PqFi5adeTDHp85fVZbGy02Ie0foUkufApGyNtYi3FftfZZ42vYGV/zJNGqICrGv9yPQjzb9WXLcCCr3eyiDJ6cBLHpGsz3SBbevdCDF3jLpZtZLmMmdJn2+MQIa2sYbIVQI1BuaM670I0dwdg1gNAjcd7Yhxz7dlTFc7+ACWDjP586nanZaG/6A8+7kXh/W4xyxYyjoNAOiCxqd31El6XFxvYY35VlnNnwWqGpz5IkpW8/38es8fMYQQQgghhBBCCCGEEEIIIYQQQgghhBC62L+X78X+IoqX1wAAAABJRU5ErkJggg==" />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}