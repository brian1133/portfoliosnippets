import React, { useState, useRef, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, InputBase } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { alpha, styled } from '@mui/material/styles';

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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function GuestHeader({ cartCount }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }

    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen]);

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Wholesome Bakes
        </Typography>
        {!searchOpen && (
          <>
            <Button color="inherit" component={Link} to="/" style={{ marginRight: '20px' }}>Home</Button>
            <Button color="inherit" component={Link} to="/menu" style={{ marginRight: '20px' }}>Menu</Button>
            <Button color="inherit" component={Link} to="/gettoknowme" style={{ marginRight: '20px' }}>Get to Know Us</Button>
            <Button color="inherit" component={Link} to="/contact" style={{ marginRight: '20px' }}>Contact</Button>
          </>
        )}
        <IconButton color="inherit" component={Link} to="/cart" style={{ marginRight: '20px' }}>
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        {searchOpen ? (
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', flexGrow: 1 }} ref={searchInputRef}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Search>
            <Button type="submit" color="inherit">Search</Button>
          </form>
        ) : (
          <IconButton color="inherit" onClick={handleSearchIconClick} style={{ marginRight: '20px' }}>
            <SearchIcon />
          </IconButton>
        )}
        <IconButton color="inherit" component={Link} to="/login">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default GuestHeader;
