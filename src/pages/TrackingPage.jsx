import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip
} from '@mui/material';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import HomeIcon from '@mui/icons-material/Home';

const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipmentDetails, setShipmentDetails] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleTrackingNumberChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleTrackShipment = () => {
    // Validate input
    if (!trackingNumber.trim()) {
      return;
    }

    // Simulate search process
    setIsSearching(true);
    setShipmentDetails(null);

    // Mock search result - in a real app this would call an API
    setTimeout(() => {
      // Check some mock tracking numbers
      if (trackingNumber === 'GE-937462817') {
        setShipmentDetails(mockShipmentData.international);
      } else if (trackingNumber === 'ZE-123456') {
        setShipmentDetails(mockShipmentData.domestic);
      } else {
        // For demo purposes, default to showing the international shipment
        setShipmentDetails(mockShipmentData.international);
      }

      setIsSearching(false);
    }, 1000);
  };

  // Mock shipment data
  const mockShipmentData = {
    international: {
      trackingNumber: 'GE-937462817',
      type: 'international',
      origin: 'Guangzhou, China',
      destination: 'Lusaka, Zambia',
      status: 'In Transit',
      estimatedDelivery: '2025-05-20',
      shipper: 'Global Express',
      shipDate: '2025-04-10',
      currentLocation: 'Johannesburg, South Africa',
      receiverInfo: 'ABC Electronics, Plot 12345, Great East Road, Lusaka',
      weight: '450 kg',
      packageType: 'Pallet',
      customsStatus: 'Cleared',
      trackingHistory: [
        {
          date: '2025-04-10',
          time: '10:30 AM',
          location: 'Guangzhou, China',
          activity: 'Shipment picked up',
          status: 'completed'
        },
        {
          date: '2025-04-12',
          time: '02:15 PM',
          location: 'Guangzhou, China',
          activity: 'Departed facility',
          status: 'completed'
        },
        {
          date: '2025-04-15',
          time: '08:45 AM',
          location: 'Dubai, UAE',
          activity: 'Transit stop',
          status: 'completed'
        },
        {
          date: '2025-04-18',
          time: '11:20 AM',
          location: 'Johannesburg, South Africa',
          activity: 'Arrived at facility',
          status: 'completed'
        },
        {
          date: '2025-04-22',
          time: '09:30 AM',
          location: 'Johannesburg, South Africa',
          activity: 'Customs processing',
          status: 'completed'
        },
        {
          date: '2025-04-25',
          time: '03:45 PM',
          location: 'Johannesburg, South Africa',
          activity: 'Customs cleared',
          status: 'completed'
        },
        {
          date: '2025-04-27',
          time: '10:15 AM',
          location: 'Johannesburg, South Africa',
          activity: 'Preparing for departure',
          status: 'active'
        },
        {
          date: '2025-05-01',
          time: 'Estimated',
          location: 'Lusaka, Zambia',
          activity: 'Arrival in destination country',
          status: 'pending'
        },
        {
          date: '2025-05-05',
          time: 'Estimated',
          location: 'Lusaka, Zambia',
          activity: 'Customs processing',
          status: 'pending'
        },
        {
          date: '2025-05-15',
          time: 'Estimated',
          location: 'Lusaka, Zambia',
          activity: 'Out for delivery',
          status: 'pending'
        },
        {
          date: '2025-05-20',
          time: 'Estimated',
          location: 'Lusaka, Zambia',
          activity: 'Delivered',
          status: 'pending'
        }
      ]
    },
    domestic: {
      trackingNumber: 'ZE-123456',
      type: 'domestic',
      origin: 'Warehouse 3, Lusaka',
      destination: 'ABC Electronics, Kitwe',
      status: 'In Transit',
      estimatedDelivery: '2025-05-10',
      shipper: 'Zambia Express',
      shipDate: '2025-05-08',
      currentLocation: 'Kabwe, Zambia',
      receiverInfo: 'ABC Electronics, 123 Copper Street, Kitwe',
      weight: '150 kg',
      packageType: 'Boxes',
      trackingHistory: [
        {
          date: '2025-05-08',
          time: '09:00 AM',
          location: 'Lusaka, Zambia',
          activity: 'Shipment picked up from warehouse',
          status: 'completed'
        },
        {
          date: '2025-05-08',
          time: '12:30 PM',
          location: 'Lusaka, Zambia',
          activity: 'Departed facility',
          status: 'completed'
        },
        {
          date: '2025-05-09',
          time: '07:15 AM',
          location: 'Kabwe, Zambia',
          activity: 'Arrived at transit facility',
          status: 'active'
        },
        {
          date: '2025-05-09',
          time: '02:00 PM',
          location: 'Kabwe, Zambia',
          activity: 'Preparing for departure',
          status: 'pending'
        },
        {
          date: '2025-05-10',
          time: 'Estimated',
          location: 'Kitwe, Zambia',
          activity: 'Out for delivery',
          status: 'pending'
        },
        {
          date: '2025-05-10',
          time: 'Estimated',
          location: 'Kitwe, Zambia',
          activity: 'Delivered',
          status: 'pending'
        }
      ]
    }
  };

  const getStatusIcon = (activity) => {
    switch (activity.toLowerCase()) {
      case 'shipment picked up':
      case 'shipment picked up from warehouse':
        return <InventoryIcon />;
      case 'departed facility':
        return <FlightTakeoffIcon />;
      case 'transit stop':
      case 'arrived at facility':
      case 'arrived at transit facility':
        return <ImportExportIcon />;
      case 'customs processing':
      case 'customs cleared':
        return <ImportExportIcon />;
      case 'arrival in destination country':
        return <FlightLandIcon />;
      case 'preparing for departure':
        return <LocalShippingIcon />;
      case 'out for delivery':
        return <LocalShippingIcon />;
      case 'delivered':
        return <HomeIcon />;
      default:
        return <CheckCircleIcon />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'active':
        return 'primary';
      case 'pending':
        return 'grey';
      default:
        return 'grey';
    }
  };

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Shipment Tracking
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Track your international and domestic shipments in real-time.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              label="Enter Tracking Number"
              value={trackingNumber}
              onChange={handleTrackingNumberChange}
              placeholder="e.g., GE-937462817 or ZE-123456"
              helperText="Enter the tracking number provided when you booked your shipment"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleTrackShipment}
              disabled={isSearching || !trackingNumber.trim()}
              startIcon={<SearchIcon />}
            >
              Track Shipment
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {shipmentDetails && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Shipment Summary
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <TrackChangesIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Tracking Number"
                    secondary={shipmentDetails.trackingNumber}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InventoryIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Status"
                    secondary={shipmentDetails.status}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalShippingIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Carrier"
                    secondary={shipmentDetails.shipper}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Estimated Delivery"
                    secondary={shipmentDetails.estimatedDelivery}
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle2" gutterBottom>
                Package Details
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Type
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {shipmentDetails.packageType}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Weight
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {shipmentDetails.weight}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Ship Date
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {shipmentDetails.shipDate}
                  </Typography>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle2" gutterBottom>
                Routing Information
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Origin
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {shipmentDetails.origin}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Destination
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {shipmentDetails.destination}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Current Location
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {shipmentDetails.currentLocation}
                  </Typography>
                </Grid>
              </Grid>

              {shipmentDetails.type === 'international' && (
                <>
                  <Divider sx={{ my: 2 }} />

                  <Typography variant="subtitle2" gutterBottom>
                    Customs Information
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        Customs Status
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {shipmentDetails.customsStatus}
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              )}
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Tracking Timeline
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                Real-time updates on your shipment's journey:
              </Typography>

              <Box>
                {shipmentDetails.trackingHistory.map((event, index) => (
                  <Paper key={index} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{
                      p: 1,
                      mr: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minWidth: '100px'
                    }}>
                      <Typography variant="body2" color="text.secondary">
                        {event.date}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {event.time}
                      </Typography>
                      <Box
                        sx={{
                          mt: 1,
                          bgcolor: event.status === 'completed' ? 'success.main' :
                                 event.status === 'active' ? 'primary.main' : 'grey.500',
                          borderRadius: '50%',
                          p: 1,
                          color: 'white'
                        }}
                      >
                        {getStatusIcon(event.activity)}
                      </Box>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="body1" fontWeight="medium">
                        {event.activity}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.location}
                      </Typography>
                      <Chip
                        size="small"
                        label={event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        color={getStatusColor(event.status)}
                        sx={{ mt: 1 }}
                      />
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}

      {!shipmentDetails && !isSearching && (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <TrackChangesIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Enter your tracking number above
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try one of these sample tracking numbers for demo purposes:
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Chip
              label="GE-937462817"
              sx={{ mr: 1, mb: 1 }}
              onClick={() => setTrackingNumber('GE-937462817')}
              color="primary"
              variant="outlined"
            />
            <Chip
              label="ZE-123456"
              sx={{ mb: 1 }}
              onClick={() => setTrackingNumber('ZE-123456')}
              color="primary"
              variant="outlined"
            />
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default TrackingPage;
