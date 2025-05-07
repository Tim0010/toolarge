import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Drawer, AppBar, Toolbar, List, Typography, IconButton, ListItem, ListItemIcon, ListItemText, Avatar, Badge, Paper, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalculateIcon from '@mui/icons-material/Calculate';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import PaymentsIcon from '@mui/icons-material/Payments';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';

// Pages
import HomePage from './pages/HomePage';
import SourcingPage from './pages/SourcingPage';
import ShippingPage from './pages/ShippingPage';
import CustomsPage from './pages/CustomsPage';
import LogisticsPage from './pages/LogisticsPage';
import WarehousePage from './pages/WarehousePage';
import PaymentsPage from './pages/PaymentsPage';
import TrackingPage from './pages/TrackingPage';
import AgentPage from './pages/AgentPage';

import './App.css';

// Create an enhanced theme with custom breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#0055a4', // Rich blue for primary actions
      light: '#4682c4',
      dark: '#003c7b',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e63946', // Coral red for accent elements
      light: '#eb6470',
      dark: '#c01c29',
      contrastText: '#ffffff',
    },
    success: {
      main: '#1a936f', // Rich green for success states
      light: '#47b390',
      dark: '#106d52',
    },
    warning: {
      main: '#ff9f1c', // Warm orange for warnings
      light: '#ffb54d',
      dark: '#df8000',
    },
    error: {
      main: '#dc2f02', // Bright red for errors
      light: '#e35935',
      dark: '#b32300',
    },
    info: {
      main: '#457b9d', // Muted blue for info
      light: '#6b96b3',
      dark: '#2f5d7c',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2b2d42',
      secondary: '#586069',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: {
        xs: '2rem',
        sm: '2.25rem',
        md: '2.5rem'
      },
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 700,
      fontSize: {
        xs: '1.75rem',
        sm: '1.85rem',
        md: '2rem'
      },
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 600,
      fontSize: {
        xs: '1.5rem',
        sm: '1.65rem',
        md: '1.75rem'
      },
      letterSpacing: '0em',
    },
    h4: {
      fontWeight: 600,
      fontSize: {
        xs: '1.25rem',
        sm: '1.35rem',
        md: '1.5rem'
      },
      letterSpacing: '0.00735em',
    },
    h5: {
      fontWeight: 600,
      fontSize: {
        xs: '1.1rem',
        sm: '1.15rem',
        md: '1.25rem'
      },
      letterSpacing: '0em',
    },
    h6: {
      fontWeight: 600,
      fontSize: {
        xs: '0.9rem',
        sm: '0.95rem',
        md: '1rem'
      },
      letterSpacing: '0.0075em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
    body1: {
      fontSize: {
        xs: '0.95rem',
        md: '1rem'
      },
    },
    body2: {
      fontSize: {
        xs: '0.85rem',
        md: '0.9rem'
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.05),0px 1px 1px 0px rgba(0,0,0,0.03),0px 1px 3px 0px rgba(0,0,0,0.05)',
    '0px 3px 3px -2px rgba(0,0,0,0.06),0px 3px 4px 0px rgba(0,0,0,0.04),0px 1px 8px 0px rgba(0,0,0,0.06)',
    '0px 3px 5px -1px rgba(0,0,0,0.07),0px 5px 8px 0px rgba(0,0,0,0.05),0px 1px 14px 0px rgba(0,0,0,0.07)',
    '0px 4px 5px -2px rgba(0,0,0,0.08),0px 7px 10px 1px rgba(0,0,0,0.05),0px 2px 16px 1px rgba(0,0,0,0.06)',
    '0px 6px 10px -3px rgba(0,0,0,0.09),0px 9px 16px 2px rgba(0,0,0,0.05),0px 3px 17px 2px rgba(0,0,0,0.06)',
    '0px 6px 11px -3px rgba(0,0,0,0.1),0px 11px 18px 2px rgba(0,0,0,0.06),0px 4px 20px 3px rgba(0,0,0,0.07)',
    '0px 8px 12px -4px rgba(0,0,0,0.1),0px 13px 22px 3px rgba(0,0,0,0.06),0px 5px 25px 4px rgba(0,0,0,0.07)',
    '0px 9px 13px -5px rgba(0,0,0,0.11),0px 15px 24px 3px rgba(0,0,0,0.07),0px 6px 28px 5px rgba(0,0,0,0.08)',
    // ... and so on
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 16px',
          fontWeight: 500,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease-in-out',
          // Increase touch target size for mobile
          '@media (max-width: 600px)': {
            minHeight: '42px',
            minWidth: '42px',
          },
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          },
        },
        sizeSmall: {
          // Ensure small buttons are still touchable on mobile
          '@media (max-width: 600px)': {
            padding: '6px 12px',
            minHeight: '36px',
          },
        },
        contained: {
          '&.MuiButton-containedPrimary': {
            background: 'linear-gradient(45deg, #0055a4 30%, #4682c4 90%)',
          },
          '&.MuiButton-containedSecondary': {
            background: 'linear-gradient(45deg, #e63946 30%, #eb6470 90%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        elevation1: {
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        },
        elevation2: {
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          // Increase touch target size for mobile
          '@media (max-width: 600px)': {
            padding: '8px',
            minHeight: '42px',
            minWidth: '42px',
          },
        },
        sizeSmall: {
          '@media (max-width: 600px)': {
            padding: '6px',
            minHeight: '36px',
            minWidth: '36px',
          },
        },
      },
    },
    // Enhanced form input styling for better visibility
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          '& input': {
            color: '#2b2d42', // Darker text for better visibility
            fontWeight: 500,
          },
          '&.Mui-focused': {
            '& input': {
              color: '#0055a4', // Primary color when focused
            },
          },
        },
        input: {
          '&::placeholder': {
            color: 'rgba(0, 0, 0, 0.6)', // Darker placeholder text
            opacity: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(0, 0, 0, 0.7)', // Darker label for better visibility
          fontWeight: 500,
          '&.Mui-focused': {
            color: '#0055a4', // Primary color when focused
            fontWeight: 600,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.25)', // Darker border for better visibility
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.4)', // Darker border on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0055a4', // Primary color when focused
            borderWidth: 2,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontWeight: 500,
          color: '#2b2d42', // Darker text for better visibility
        },
        icon: {
          color: 'rgba(0, 0, 0, 0.7)', // Darker icon for better visibility
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 85, 164, 0.1)',
            color: '#0055a4',
            fontWeight: 600,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(0, 0, 0, 0.7)', // Darker label for better visibility
          fontWeight: 500,
        },
      },
    },
  },
});

// Responsive drawer width
const drawerWidth = {
  xs: 240,
  sm: 260,
  md: 280
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('/');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Update the selected menu item based on current path
  React.useEffect(() => {
    const path = window.location.pathname;
    setSelectedItem(path);
  }, []);

  const handleNavItemClick = (path) => {
    setSelectedItem(path);
  };

  // Group menu items by category
  const menuCategories = [
    {
      title: 'Main',
      items: [
        { text: 'Home', icon: <HomeIcon />, path: '/' },
      ]
    },
    {
      title: 'International',
      items: [
        { text: 'Global Sourcing', icon: <InventoryIcon />, path: '/sourcing' },
        { text: 'Shipping Management', icon: <LocalShippingIcon />, path: '/shipping' },
        { text: 'Customs Calculator', icon: <CalculateIcon />, path: '/customs' },
      ]
    },
    {
      title: 'Domestic',
      items: [
        { text: 'Domestic Logistics', icon: <LocalShippingIcon />, path: '/logistics' },
        { text: 'Warehousing', icon: <WarehouseIcon />, path: '/warehouse' },
      ]
    },
    {
      title: 'Management',
      items: [
        { text: 'Payments', icon: <PaymentsIcon />, path: '/payments' },
        { text: 'Tracking', icon: <TrackChangesIcon />, path: '/tracking' },
        { text: 'Agent Support', icon: <SupportAgentIcon />, path: '/agent' },
      ]
    }
  ];

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{
        p: { xs: 1.5, sm: 2 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        background: 'linear-gradient(45deg, #003c7b 30%, #0055a4 90%)',
        color: 'white',
        height: { xs: 56, sm: 64 }
      }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
          }}
        >
          TOOLAGE
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, overflow: 'auto', p: { xs: 1.5, sm: 2 } }}>
        {menuCategories.map((category) => (
          <Box key={category.title} sx={{ mb: { xs: 2, sm: 3 } }}>
            <Typography
              variant="overline"
              color="text.secondary"
              sx={{
                fontWeight: 600,
                pl: { xs: 1, sm: 2 },
                fontSize: { xs: '0.7rem', sm: '0.75rem' },
                letterSpacing: '0.08rem'
              }}
            >
              {category.title}
            </Typography>

            <List sx={{ mt: 0.5 }}>
              {category.items.map((item) => {
                const isSelected = selectedItem === item.path;
                return (
                  <ListItem
                    button
                    key={item.text}
                    component="a"
                    href={item.path}
                    onClick={() => handleNavItemClick(item.path)}
                    sx={{
                      borderRadius: 2,
                      mb: 0.5,
                      py: { xs: 0.75, sm: 1 },
                      px: { xs: 1, sm: 1.5 },
                      color: isSelected ? 'primary.main' : 'text.primary',
                      bgcolor: isSelected ? 'primary.light' : 'transparent',
                      '&.MuiListItem-root': {
                        bgcolor: isSelected ? 'rgba(0, 85, 164, 0.1)' : 'transparent',
                      },
                      '&:hover': {
                        bgcolor: isSelected ? 'rgba(0, 85, 164, 0.15)' : 'rgba(0, 0, 0, 0.04)',
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: isSelected ? 'primary.main' : 'text.secondary',
                        minWidth: { xs: 35, sm: 45 },
                        '& .MuiSvgIcon-root': {
                          fontSize: { xs: '1.2rem', sm: '1.4rem' }
                        }
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: isSelected ? 600 : 400,
                            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' }
                          }}
                        >
                          {item.text}
                        </Typography>
                      }
                    />
                    {isSelected && (
                      <Box
                        sx={{
                          width: { xs: 3, sm: 4 },
                          height: { xs: 28, sm: 35 },
                          bgcolor: 'primary.main',
                          borderRadius: 4,
                          ml: 1
                        }}
                      />
                    )}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        ))}
      </Box>

      <Box sx={{ p: { xs: 1.5, sm: 2 }, borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
        <Paper
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderRadius: 2,
            bgcolor: 'primary.light',
            color: 'white',
            background: 'linear-gradient(45deg, #003c7b 30%, #0055a4 90%)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              mb: 0.5,
              fontSize: { xs: '0.8rem', sm: '0.875rem' }
            }}
          >
            Need Help?
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mb: 1.5,
              fontSize: { xs: '0.7rem', sm: '0.75rem' }
            }}
          >
            Contact our support team anytime for assistance
          </Typography>
          <Button
            variant="contained"
            fullWidth
            size="small"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              py: { xs: 0.5, sm: 0.75 },
              fontSize: { xs: '0.75rem', sm: '0.8rem' },
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)'
              }
            }}
          >
            Contact Support
          </Button>
        </Paper>
      </Box>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <AppBar
            position="fixed"
            elevation={0}
            sx={{
              width: {
                sm: `calc(100% - ${drawerWidth.sm}px)`,
                md: `calc(100% - ${drawerWidth.md}px)`
              },
              ml: {
                sm: `${drawerWidth.sm}px`,
                md: `${drawerWidth.md}px`
              },
              bgcolor: 'background.paper',
              color: 'text.primary',
              borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
            }}
          >
            <Toolbar sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: { xs: 1, sm: 2 }, // Responsive padding
              minHeight: { xs: '56px', sm: '64px' } // Responsive height
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: { xs: 1, sm: 2 }, display: { sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: 'block', sm: 'block'},
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  Toolage
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{
                    ml: { xs: 1, sm: 1.5 },
                    display: { xs: 'none', md: 'block'},
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
                  }}
                >
                  International Sourcing & Logistics Platform
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mr: { xs: 1, sm: 2 },
                    display: { xs: 'none', md: 'flex' },
                    py: { xs: 0.5, sm: 0.75 },
                    px: { xs: 1, sm: 1.5, md: 2 },
                    fontSize: { xs: '0.75rem', sm: '0.8rem' }
                  }}
                >
                  Create New Request
                </Button>
                <IconButton
                  color="inherit"
                  size="medium"
                  sx={{
                    padding: { xs: 0.5, sm: 1 }
                  }}
                >
                  <Badge badgeContent={4} color="error">
                    <NotificationsIcon sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
                  </Badge>
                </IconButton>
                <Avatar
                  sx={{
                    ml: { xs: 1, sm: 2 },
                    bgcolor: 'primary.main',
                    width: { xs: 28, sm: 32 },
                    height: { xs: 28, sm: 32 },
                    cursor: 'pointer'
                  }}
                >
                  U
                </Avatar>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{
              width: {
                sm: drawerWidth.sm,
                md: drawerWidth.md
              },
              flexShrink: { sm: 0 }
            }}
            aria-label="navigation menu"
          >
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better mobile performance
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth.xs
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: {
                    sm: drawerWidth.sm,
                    md: drawerWidth.md
                  }
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: {
                sm: `calc(100% - ${drawerWidth.sm}px)`,
                md: `calc(100% - ${drawerWidth.md}px)`
              },
              bgcolor: '#f9fafb',
              minHeight: '100vh'
            }}
          >
            <Toolbar />
            <Box sx={{
              p: { xs: 2, sm: 3, md: 4 },
              maxWidth: '1600px',
              mx: 'auto'
            }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sourcing" element={<SourcingPage />} />
                <Route path="/shipping" element={<ShippingPage />} />
                <Route path="/customs" element={<CustomsPage />} />
                <Route path="/logistics" element={<LogisticsPage />} />
                <Route path="/warehouse" element={<WarehousePage />} />
                <Route path="/payments" element={<PaymentsPage />} />
                <Route path="/tracking" element={<TrackingPage />} />
                <Route path="/agent" element={<AgentPage />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
