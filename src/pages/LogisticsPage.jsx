import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Switch,
  FormControlLabel
} from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const LogisticsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [pickupLocation, setPickupLocation] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [shipmentType, setShipmentType] = useState('');
  const [weight, setWeight] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [isFragile, setIsFragile] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
  };

  const handleDeliveryLocationChange = (event) => {
    setDeliveryLocation(event.target.value);
  };

  const handleShipmentTypeChange = (event) => {
    setShipmentType(event.target.value);
  };

  const handleProviderSelect = (providerId) => {
    setSelectedProvider(providerId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNext();
  };

  const steps = ['Delivery Details', 'Select Provider', 'Review & Book'];

  const mockLogisticsProviders = [
    {
      id: 1,
      name: 'Zambia Express',
      price: 45,
      deliveryTime: '1-2 days',
      rating: 4.6
    },
    {
      id: 2,
      name: 'Flash Logistics',
      price: 60,
      deliveryTime: 'Same day',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Secure Transport',
      price: 50,
      deliveryTime: '1 day',
      rating: 4.7
    }
  ];

  const mockDeliveries = [
    {
      id: 'DEL-2025-001',
      pickup: 'Warehouse 3, Lusaka',
      delivery: 'ABC Electronics, Kitwe',
      provider: 'Zambia Express',
      status: 'In Transit',
      estimatedDelivery: '2025-05-10',
      trackingNumber: 'ZE-123456'
    },
    {
      id: 'DEL-2025-002',
      pickup: 'International Port, Lusaka',
      delivery: 'XYZ Manufacturing, Ndola',
      provider: 'Flash Logistics',
      status: 'Delivered',
      estimatedDelivery: '2025-05-05',
      trackingNumber: 'FL-654321'
    },
    {
      id: 'DEL-2025-003',
      pickup: 'Central Warehouse, Lusaka',
      delivery: 'Main Street Retail, Livingstone',
      provider: 'Secure Transport',
      status: 'Scheduled',
      estimatedDelivery: '2025-05-12',
      trackingNumber: 'ST-789101'
    }
  ];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel
                    id="pickup-location-label"
                    sx={{
                      fontWeight: 500,
                      color: 'rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    Pickup Location
                  </InputLabel>
                  <Select
                    labelId="pickup-location-label"
                    id="pickup-location"
                    value={pickupLocation}
                    label="Pickup Location"
                    onChange={handlePickupLocationChange}
                    sx={{
                      '& .MuiSelect-select': {
                        fontWeight: 500,
                        color: '#2b2d42'
                      }
                    }}
                  >
                    <MenuItem value="Warehouse 1, Lusaka">Warehouse 1, Lusaka</MenuItem>
                    <MenuItem value="Warehouse 2, Lusaka">Warehouse 2, Lusaka</MenuItem>
                    <MenuItem value="Warehouse 3, Lusaka">Warehouse 3, Lusaka</MenuItem>
                    <MenuItem value="International Port, Lusaka">International Port, Lusaka</MenuItem>
                    <MenuItem value="Central Warehouse, Lusaka">Central Warehouse, Lusaka</MenuItem>
                    <MenuItem value="Custom Location">Custom Location (specify in notes)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel
                    id="delivery-location-label"
                    sx={{
                      fontWeight: 500,
                      color: 'rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    Delivery Location
                  </InputLabel>
                  <Select
                    labelId="delivery-location-label"
                    id="delivery-location"
                    value={deliveryLocation}
                    label="Delivery Location"
                    onChange={handleDeliveryLocationChange}
                    sx={{
                      '& .MuiSelect-select': {
                        fontWeight: 500,
                        color: '#2b2d42'
                      }
                    }}
                  >
                    <MenuItem value="Lusaka">Lusaka</MenuItem>
                    <MenuItem value="Ndola">Ndola</MenuItem>
                    <MenuItem value="Kitwe">Kitwe</MenuItem>
                    <MenuItem value="Livingstone">Livingstone</MenuItem>
                    <MenuItem value="Chipata">Chipata</MenuItem>
                    <MenuItem value="Kabwe">Kabwe</MenuItem>
                    <MenuItem value="Chingola">Chingola</MenuItem>
                    <MenuItem value="Mufulira">Mufulira</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth required>
                  <InputLabel
                    id="shipment-type-label"
                    sx={{
                      fontWeight: 500,
                      color: 'rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    Shipment Type
                  </InputLabel>
                  <Select
                    labelId="shipment-type-label"
                    id="shipment-type"
                    value={shipmentType}
                    label="Shipment Type"
                    onChange={handleShipmentTypeChange}
                    sx={{
                      '& .MuiSelect-select': {
                        fontWeight: 500,
                        color: '#2b2d42'
                      }
                    }}
                  >
                    <MenuItem value="Parcel">Parcel</MenuItem>
                    <MenuItem value="Box">Box</MenuItem>
                    <MenuItem value="Pallet">Pallet</MenuItem>
                    <MenuItem value="Full Truck">Full Truck</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="weight"
                  label="Total Weight (kg)"
                  fullWidth
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  InputProps={{
                    sx: {
                      '& input': {
                        fontWeight: 500,
                        color: '#2b2d42'
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: 500,
                      color: 'rgba(0, 0, 0, 0.7)'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="dimensions"
                  label="Dimensions (L × W × H cm)"
                  fullWidth
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder="E.g., 50 × 40 × 30"
                  InputProps={{
                    sx: {
                      '& input': {
                        fontWeight: 500,
                        color: '#2b2d42'
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: 500,
                      color: 'rgba(0, 0, 0, 0.7)'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isFragile}
                      onChange={(e) => setIsFragile(e.target.checked)}
                      name="isFragile"
                      color="primary"
                    />
                  }
                  label="Contains fragile items"
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      fontWeight: 500,
                      color: '#2b2d42'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="additionalInfo"
                  label="Additional Information"
                  multiline
                  rows={3}
                  fullWidth
                  placeholder="Any special requirements or notes for your delivery..."
                  InputProps={{
                    sx: {
                      '& textarea': {
                        fontWeight: 500,
                        color: '#2b2d42'
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      fontWeight: 500,
                      color: 'rgba(0, 0, 0, 0.7)'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      mt: 3,
                      ml: 1,
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      py: 1.2,
                      px: 3,
                      boxShadow: '0 4px 10px rgba(0,85,164,0.25)'
                    }}
                    startIcon={<ReceiptIcon />}
                  >
                    Get Delivery Quotes
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Available Logistics Providers
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Select a logistics provider for your domestic delivery:
            </Typography>

            <Grid container spacing={3}>
              {mockLogisticsProviders.map((provider) => (
                <Grid item xs={12} md={4} key={provider.id}>
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      border: selectedProvider === provider.id ? '2px solid #1976d2' : 'none',
                      '&:hover': {
                        boxShadow: 3,
                      }
                    }}
                    onClick={() => handleProviderSelect(provider.id)}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {provider.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Rating: {provider.rating}/5.0
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        <strong>Delivery Time:</strong> {provider.deliveryTime}
                      </Typography>
                      <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                        ${provider.price} USD
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={!selectedProvider}
              >
                Select & Continue
              </Button>
            </Box>
          </Box>
        );
      case 2:
        const selectedProviderData = mockLogisticsProviders.find(provider => provider.id === selectedProvider);
        return (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Review Delivery Booking
            </Typography>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Delivery Details
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Pickup Location"
                    secondary={pickupLocation}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Delivery Location"
                    secondary={deliveryLocation}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Shipment Type"
                    secondary={shipmentType}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Weight"
                    secondary={`${weight} kg`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dimensions"
                    secondary={dimensions}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Contains Fragile Items"
                    secondary={isFragile ? 'Yes' : 'No'}
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle1" gutterBottom>
                Selected Logistics Provider
              </Typography>
              {selectedProviderData && (
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    {selectedProviderData.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Estimated Delivery Time: {selectedProviderData.deliveryTime}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    Total Cost: ${selectedProviderData.price} USD
                  </Typography>
                </Box>
              )}
            </Paper>

            <Typography variant="body2" paragraph color="text.secondary">
              By confirming this booking, you agree to the terms and conditions of the selected logistics provider.
              Payment will be processed once you confirm the booking.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
              >
                Confirm & Book
              </Button>
            </Box>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Domestic Logistics
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Coordinate deliveries between locations within Zambia, from our warehouses to your business or customers.
        </Typography>
      </Paper>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="logistics tabs">
          <Tab label="Book Domestic Delivery" />
          <Tab label="My Deliveries" />
        </Tabs>
      </Box>

      {activeTab === 0 && (
        <Paper sx={{ p: 3 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {getStepContent(activeStep)}
        </Paper>
      )}

      {activeTab === 1 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Your Deliveries
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Delivery ID</TableCell>
                  <TableCell>Pickup</TableCell>
                  <TableCell>Delivery</TableCell>
                  <TableCell>Provider</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Est. Delivery</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockDeliveries.map((delivery) => (
                  <TableRow key={delivery.id}>
                    <TableCell>{delivery.id}</TableCell>
                    <TableCell>{delivery.pickup}</TableCell>
                    <TableCell>{delivery.delivery}</TableCell>
                    <TableCell>{delivery.provider}</TableCell>
                    <TableCell>
                      <Chip
                        label={delivery.status}
                        color={
                          delivery.status === 'Delivered' ? 'success' :
                          delivery.status === 'In Transit' ? 'primary' :
                          'warning'
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{delivery.estimatedDelivery}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        href={`/tracking?id=${delivery.trackingNumber}`}
                      >
                        Track
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Box>
  );
};

export default LogisticsPage;
