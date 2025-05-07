import React, { useState } from 'react';
import {
  Box, Typography, Grid, Card, CardContent, CardActionArea, Button,
  Paper, Container, Avatar, Divider, Chip, Rating, useTheme, useMediaQuery,
  IconButton
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import CalculateIcon from '@mui/icons-material/Calculate';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import PaymentsIcon from '@mui/icons-material/Payments';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mwanza",
      role: "Operations Manager, Zambia Imports Ltd",
      quote: "Toolage has transformed how we manage our international supply chain. The platform is intuitive and has saved us countless hours of work.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "David Banda",
      role: "CEO, Lusaka Trading Co.",
      quote: "Since partnering with Toolage, we've reduced our shipping costs by 22% and improved delivery times. Their customer service is exceptional.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Grace Mutale",
      role: "Procurement Director, Copperbelt Retailers",
      quote: "The transparency and reliability of Toolage's platform has made sourcing from international markets seamless and stress-free.",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const handlePrevTestimonial = () => {
    setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const coreFeatures = [
    {
      title: 'Global Sourcing',
      description: 'Connect with verified suppliers in China, India and South Africa',
      icon: <InventoryIcon />,
      color: '#0055a4',
      path: '/sourcing',
      highlight: true
    },
    {
      title: 'Shipping Management',
      description: 'Request quotes, book shipping services and track international shipments',
      icon: <LocalShippingIcon />,
      color: '#1a936f',
      path: '/shipping'
    },
    {
      title: 'Customs Calculator',
      description: 'Estimate import duties and clearance fees based on product value',
      icon: <CalculateIcon />,
      color: '#ff9f1c',
      path: '/customs'
    },
    {
      title: 'Warehousing System',
      description: 'Book and manage storage in Zambian fulfillment centers',
      icon: <WarehouseIcon />,
      color: '#e63946',
      path: '/warehouse'
    },
    {
      title: 'Payments',
      description: 'Secure payment processing for all logistics and sourcing services',
      icon: <PaymentsIcon />,
      color: '#457b9d',
      path: '/payments'
    },
    {
      title: 'Shipment Tracking',
      description: 'Real-time tracking for both international and domestic shipments',
      icon: <TrackChangesIcon />,
      color: '#2b2d42',
      path: '/tracking'
    }
  ];

  const stats = [
    { value: '3', label: 'Source Countries', icon: <PublicIcon /> },
    { value: '50+', label: 'Partner Suppliers', icon: <HandshakeIcon /> },
    { value: '24/7', label: 'Support', icon: <SupportAgentIcon /> },
    { value: '1000+', label: 'Successful Deliveries', icon: <LocalShippingIcon /> }
  ];

  const advantages = [
    'End-to-end international logistics',
    'Direct connection to verified suppliers',
    'Real-time shipment tracking',
    'Secure payment processing',
    'Expert logistics agents',
    'Customs clearance assistance'
  ];

  return (
    <Box>
      {/* Hero section */}
      <Paper
        sx={{
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          mb: 8,
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
        }}
        elevation={0}
      >
        <Box sx={{
          position: 'relative',
          height: {xs: 450, md: 550},
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=85)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: {xs: 'center', md: 'flex-start'},
          p: { xs: 4, md: 8 },
          textAlign: {xs: 'center', md: 'left'},
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%)',
            zIndex: 1
          }
        }}>
          <Box
            className="stagger-animation"
            sx={{
              maxWidth: {xs: '100%', md: '55%'},
              position: 'relative',
              zIndex: 2
            }}
          >
            <Chip
              className="animate-fadeIn"
              label="International Logistics"
              sx={{
                mb: 3,
                backgroundColor: 'rgba(255,255,255,0.95)',
                fontWeight: 600,
                color: 'primary.dark',
                '& .MuiChip-label': { px: 2, py: 0.75 },
                fontSize: '0.9rem',
                height: 32
              }}
            />
            <Typography
              className="animate-fadeIn"
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'white',
                mb: 3,
                fontSize: {xs: '2.5rem', sm: '3rem', md: '3.75rem'},
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                textShadow: '0px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Connect Zambia to<br />
              Global Markets
            </Typography>
            <Typography
              className="animate-fadeIn"
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.95)',
                mb: 5,
                fontWeight: 400,
                maxWidth: 600,
                lineHeight: 1.6,
                fontSize: {xs: '1rem', sm: '1.1rem', md: '1.25rem'}
              }}
            >
              Your all-in-one international sourcing & logistics platform connecting Zambian businesses with reliable suppliers in China, India, and South Africa.
            </Typography>
            <Box
              className="animate-fadeIn"
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}
            >
              <Button
                variant="contained"
                size="large"
                href="/sourcing"
                className="button-hover-effect"
                sx={{
                  px: 4,
                  py: 1.75,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 14px rgba(0,85,164,0.4)',
                  borderRadius: 2,
                  textTransform: 'none'
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                className="button-hover-effect"
                sx={{
                  px: 4,
                  py: 1.75,
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  borderColor: 'white',
                  borderWidth: 2,
                  color: 'white',
                  borderRadius: 2,
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'white',
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
                href="/tracking"
              >
                Track Shipment
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Stats section */}
      <Paper
        elevation={0}
        sx={{
          mb: 8,
          py: 4,
          borderRadius: 4,
          background: 'linear-gradient(90deg, rgba(0,85,164,0.03) 0%, rgba(70,130,196,0.06) 100%)',
          border: '1px solid rgba(0,85,164,0.08)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box sx={{
                  textAlign: 'center',
                  p: { xs: 2, md: 3 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: { xs: '180px', md: '200px' } // Consistent height
                }}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: { xs: 60, md: 70 },
                      height: { xs: 60, md: 70 },
                      mb: 2,
                      mx: 'auto',
                      boxShadow: '0 6px 16px rgba(0,85,164,0.2)',
                      '& .MuiSvgIcon-root': {
                        fontSize: { xs: '1.8rem', md: '2rem' }
                      }
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: 'primary.main',
                      fontSize: {xs: '2rem', sm: '2.25rem', md: '2.5rem'},
                      lineHeight: 1,
                      height: '40px', // Consistent height for numbers
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      height: '40px', // Consistent height for labels
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>

      {/* Main features section */}
      <Box sx={{ mb: 10, px: { xs: 2, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="Our Services"
            sx={{
              mb: 2.5,
              backgroundColor: 'rgba(0,85,164,0.08)',
              color: 'primary.main',
              fontWeight: 600,
              fontSize: '0.85rem',
              height: 30,
              '& .MuiChip-label': { px: 2 }
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2.5,
              background: 'linear-gradient(45deg, #0055a4 30%, #4682c4 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem' },
              letterSpacing: '-0.01em'
            }}
          >
            Comprehensive Logistics Solutions
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6
            }}
          >
            Manage your entire supply chain from global sourcing to last-mile delivery with our integrated platform.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {coreFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={0}
                className="hover-lift"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  border: feature.highlight ? '2px solid #0055a4' : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: feature.highlight
                    ? '0 8px 24px rgba(0,85,164,0.15)'
                    : '0 4px 12px rgba(0,0,0,0.03)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: feature.highlight
                      ? '0 16px 30px rgba(0,85,164,0.2)'
                      : '0 12px 24px rgba(0,0,0,0.08)'
                  }
                }}
              >
                {feature.highlight && (
                  <Chip
                    label="Popular"
                    color="primary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: 20,
                      fontWeight: 600,
                      px: 1.5,
                      height: 26,
                      fontSize: '0.75rem'
                    }}
                  />
                )}
                <CardActionArea
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    p: 0,
                    height: '100%',
                    borderRadius: 3
                  }}
                  href={feature.path}
                >
                  <Box
                    sx={{
                      p: 3.5,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      minHeight: { xs: 'auto', md: '320px' } // Consistent minimum height on desktop
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: `${feature.color}12`,
                        color: feature.color,
                        width: 60,
                        height: 60,
                        mb: 2.5,
                        boxShadow: `0 6px 16px ${feature.color}15`,
                        '& .MuiSvgIcon-root': {
                          fontSize: '1.75rem'
                        }
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        color: 'text.primary',
                        fontSize: { xs: '1.25rem', md: '1.35rem' },
                        height: { md: '40px' }, // Consistent height for titles
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                        flexGrow: 1, // Take up available space
                        height: { md: '80px' }, // Consistent height for descriptions
                        overflow: 'hidden', // Prevent overflow
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {feature.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: feature.color,
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        mt: 'auto',
                        height: '24px', // Consistent height for the link
                        '& .MuiSvgIcon-root': {
                          transition: 'transform 0.2s ease-in-out'
                        },
                        '&:hover .MuiSvgIcon-root': {
                          transform: 'translateX(4px)'
                        }
                      }}
                    >
                      <Typography
                        variant="button"
                        sx={{
                          mr: 1,
                          textTransform: 'none',
                          fontSize: '0.9rem'
                        }}
                      >
                        Learn More
                      </Typography>
                      <ArrowForwardIcon fontSize="small" />
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Value proposition section */}
      <Grid container spacing={{ xs: 6, md: 8 }} sx={{ mb: 10, px: { xs: 2, md: 4 } }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: {xs: 2, md: 4}, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Chip
              label="Why Choose Us"
              sx={{
                mb: 3,
                backgroundColor: 'rgba(230,57,70,0.08)',
                color: 'secondary.main',
                fontWeight: 600,
                fontSize: '0.85rem',
                height: 30,
                '& .MuiChip-label': { px: 2 }
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem' },
                letterSpacing: '-0.01em',
                color: '#2b2d42'
              }}
            >
              Your Trusted Partner for Global Trade
            </Typography>
            <Typography
              variant="body1"
              paragraph
              color="text.secondary"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                mb: 4
              }}
            >
              Toolage eliminates the complexity of international sourcing and logistics for Zambian businesses by providing a unified platform to manage every aspect of your supply chain.
            </Typography>

            <Box sx={{ mb: 5 }}>
              {advantages.map((advantage, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    mb: 2.5,
                    '&:last-child': {
                      mb: 0
                    }
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'success.main',
                      mr: 2,
                      mt: 0.25,
                      fontSize: '1.25rem'
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: '#2b2d42',
                      fontSize: '1rem',
                      lineHeight: 1.5
                    }}
                  >
                    {advantage}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/agent"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0 4px 14px rgba(230,57,70,0.3)',
                alignSelf: 'flex-start'
              }}
            >
              Connect with an Agent
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              height: '100%',
              backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=85)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: { xs: 350, md: 450 },
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '1px solid rgba(0,0,0,0.05)',
              display: 'flex' // Ensure it fills the grid cell properly
            }}
          />
        </Grid>
      </Grid>

      {/* CTA section */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          p: {xs: 4, sm: 6, md: 8},
          mb: 8,
          mx: { xs: 2, md: 4 },
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0055a4 0%, #4682c4 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,85,164,0.25)',
          minHeight: { xs: 'auto', md: '320px' }, // Consistent height with feature cards
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: -80,
            left: -80,
            width: 250,
            height: 250,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.03)',
            zIndex: 0
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -120,
            right: -120,
            width: 300,
            height: 300,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.04)',
            zIndex: 0
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10%',
            width: 100,
            height: 100,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.05)',
            zIndex: 0
          }}
        />

        {/* Content */}
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 800, mx: 'auto' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
              letterSpacing: '-0.01em',
              mb: 3,
              lineHeight: 1.2
            }}
          >
            Ready to Simplify Your International Sourcing?
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{
              fontWeight: 400,
              mb: 5,
              opacity: 0.95,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            Join hundreds of Zambian businesses that have optimized their international supply chain with Toolage.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              className="button-hover-effect animate-scaleIn"
              sx={{
                px: 4,
                py: 1.75,
                fontSize: '1rem',
                fontWeight: 600,
                bgcolor: 'white',
                color: 'primary.main',
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.95)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                }
              }}
              href="/sourcing"
            >
              Start Sourcing Today
            </Button>
            <Button
              variant="outlined"
              size="large"
              className="button-hover-effect animate-scaleIn"
              sx={{
                px: 4,
                py: 1.75,
                fontSize: '1rem',
                fontWeight: 500,
                borderColor: 'white',
                borderWidth: 2,
                color: 'white',
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': {
                  borderColor: 'white',
                  borderWidth: 2,
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
              href="/shipping"
            >
              Explore Shipping Options
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Testimonials Section */}
      <Box sx={{ mb: 10, px: { xs: 2, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="Testimonials"
            sx={{
              mb: 2.5,
              backgroundColor: 'rgba(0,85,164,0.08)',
              color: 'primary.main',
              fontWeight: 600,
              fontSize: '0.85rem',
              height: 30,
              '& .MuiChip-label': { px: 2 }
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2.5,
              color: '#2b2d42',
              fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem' },
              letterSpacing: '-0.01em',
              lineHeight: 1.2
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6
            }}
          >
            Trusted by businesses across Zambia to streamline their international logistics
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            maxWidth: 1000,
            mx: 'auto',
            px: { xs: 2, md: 6 }
          }}
        >
          <Paper
            elevation={0}
            className="hover-lift"
            sx={{
              borderRadius: 4,
              p: { xs: 3, md: 5 },
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)',
              minHeight: { xs: 'auto', md: '300px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(249,250,251,1) 100%)',
              transition: 'all 0.3s ease'
            }}
          >
            <FormatQuoteIcon
              sx={{
                position: 'absolute',
                top: 20,
                left: 20,
                fontSize: '4rem',
                color: 'rgba(0,85,164,0.08)',
                transform: 'rotate(180deg)'
              }}
            />

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: { xs: 4, md: 6 },
                position: 'relative',
                zIndex: 1
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', md: 'flex-start' },
                  width: { xs: '100%', md: '30%' }
                }}
              >
                <Avatar
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  sx={{
                    width: 120,
                    height: 120,
                    mb: 2,
                    border: '4px solid white',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 0.5,
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  {testimonials[activeTestimonial].name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 1.5,
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  {testimonials[activeTestimonial].role}
                </Typography>
                <Rating
                  value={testimonials[activeTestimonial].rating}
                  precision={0.5}
                  readOnly
                  sx={{ color: '#ffc107' }}
                />
              </Box>

              <Box
                sx={{
                  width: { xs: '100%', md: '70%' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    color: '#2b2d42',
                    mb: 3,
                    position: 'relative',
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  "{testimonials[activeTestimonial].quote}"
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mt: { xs: 4, md: 2 }
              }}
            >
              <IconButton
                onClick={handlePrevTestimonial}
                sx={{
                  bgcolor: 'rgba(0,85,164,0.08)',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(0,85,164,0.15)',
                  }
                }}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>

              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: index === activeTestimonial ? 'primary.main' : 'rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    mt: 1.5
                  }}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}

              <IconButton
                onClick={handleNextTestimonial}
                sx={{
                  bgcolor: 'rgba(0,85,164,0.08)',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(0,85,164,0.15)',
                  }
                }}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
