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
  Chip
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ShippingPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [shipmentType, setShipmentType] = useState('');
  const [weight, setWeight] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [selectedQuote, setSelectedQuote] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleShipmentTypeChange = (event) => {
    setShipmentType(event.target.value);
  };

  const handleQuoteSelect = (quoteId) => {
    setSelectedQuote(quoteId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNext();
  };

  const steps = ['Shipment Details', 'Compare Quotes', 'Review & Book'];

  const mockShippingQuotes = [
    {
      id: 1,
      carrier: 'Global Express',
      transitTime: '25-30 days',
      price: 1250,
      deliveryDate: '2025-06-08',
      service: 'Standard Ocean Freight'
    },
    {
      id: 2,
      carrier: 'FastShip',
      transitTime: '20-25 days',
      price: 1450,
      deliveryDate: '2025-06-03',
      service: 'Express Ocean Freight'
    },
    {
      id: 3,
      carrier: 'Air Logistics',
      transitTime: '5-7 days',
      price: 2500,
      deliveryDate: '2025-05-15',
      service: 'Air Freight'
    }
  ];

  const mockShipments = [
    {
      id: 'SHP-2025-001',
      origin: 'Guangzhou, China',
      destination: 'Lusaka, Zambia',
      carrier: 'Global Express',
      status: 'In Transit',
      estimatedDelivery: '2025-05-20',
      trackingNumber: 'GE-937462817'
    },
    {
      id: 'SHP-2025-002',
      origin: 'Mumbai, India',
      destination: 'Ndola, Zambia',
      carrier: 'FastShip',
      status: 'Customs Clearance',
      estimatedDelivery: '2025-05-15',
      trackingNumber: 'FS-738291046'
    },
    {
      id: 'SHP-2025-003',
      origin: 'Johannesburg, South Africa',
      destination: 'Kitwe, Zambia',
      carrier: 'Air Logistics',
      status: 'Delivered',
      estimatedDelivery: '2025-04-30',
      trackingNumber: 'AL-627319458'
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
                    id="origin-label"
                    sx={{
                      fontWeight: 500,
                      color: 'rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    Origin Country
                  </InputLabel>
                  <Select
                    labelId="origin-label"
                    id="origin"
                    value={origin}
                    label="Origin Country"
                    onChange={handleOriginChange}
                    sx={{
                      '& .MuiSelect-select': {
                        fontWeight: 500,
                        color: '#2b2d42'
                      }
                    }}
                  >
                    <MenuItem value="China">China</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="South Africa">South Africa</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel
                    id="destination-label"
                    sx={{
                      fontWeight: 500,
                      color: 'rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    Destination (Zambia)
                  </InputLabel>
                  <Select
                    labelId="destination-label"
                    id="destination"
                    value={destination}
                    label="Destination (Zambia)"
                    onChange={handleDestinationChange}
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
                    <MenuItem value="Ocean FCL">Ocean Freight (Full Container)</MenuItem>
                    <MenuItem value="Ocean LCL">Ocean Freight (Less than Container)</MenuItem>
                    <MenuItem value="Air Freight">Air Freight</MenuItem>
                    <MenuItem value="Express">Express Courier</MenuItem>
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
                  placeholder="E.g., 100 × 80 × 90"
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
                <TextField
                  id="additionalInfo"
                  label="Additional Information"
                  multiline
                  rows={3}
                  fullWidth
                  placeholder="Any special requirements or notes for your shipment..."
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
                    Get Shipping Quotes
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
              Available Shipping Options
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Select the shipping option that best fits your needs:
            </Typography>

            <Grid container spacing={3}>
              {mockShippingQuotes.map((quote) => (
                <Grid item xs={12} md={4} key={quote.id}>
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      border: selectedQuote === quote.id ? '2px solid #1976d2' : 'none',
                      '&:hover': {
                        boxShadow: 3,
                      }
                    }}
                    onClick={() => handleQuoteSelect(quote.id)}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {quote.carrier}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        <strong>Service:</strong> {quote.service}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        <strong>Transit Time:</strong> {quote.transitTime}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        <strong>Estimated Delivery:</strong> {quote.deliveryDate}
                      </Typography>
                      <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                        ${quote.price} USD
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
                disabled={!selectedQuote}
              >
                Select & Continue
              </Button>
            </Box>
          </Box>
        );
      case 2:
        const selectedQuoteData = mockShippingQuotes.find(quote => quote.id === selectedQuote);
        return (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Review Shipping Booking
            </Typography>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Shipment Details
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Origin"
                    secondary={origin}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Destination"
                    secondary={destination}
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
              </List>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle1" gutterBottom>
                Selected Shipping Option
              </Typography>
              {selectedQuoteData && (
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    {selectedQuoteData.carrier} - {selectedQuoteData.service}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Transit Time: {selectedQuoteData.transitTime}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Estimated Delivery: {selectedQuoteData.deliveryDate}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    Total Cost: ${selectedQuoteData.price} USD
                  </Typography>
                </Box>
              )}
            </Paper>

            <Typography variant="body2" paragraph color="text.secondary">
              By confirming this booking, you agree to the terms and conditions of the selected carrier.
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
          Shipping Management
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Request quotes, book international shipping, and track your shipments from China, India, and South Africa to Zambia.
        </Typography>
      </Paper>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="shipping tabs">
          <Tab label="Book Shipping" />
          <Tab label="My Shipments" />
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
            Your Shipments
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Shipment ID</TableCell>
                  <TableCell>Origin</TableCell>
                  <TableCell>Destination</TableCell>
                  <TableCell>Carrier</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Est. Delivery</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockShipments.map((shipment) => (
                  <TableRow key={shipment.id}>
                    <TableCell>{shipment.id}</TableCell>
                    <TableCell>{shipment.origin}</TableCell>
                    <TableCell>{shipment.destination}</TableCell>
                    <TableCell>{shipment.carrier}</TableCell>
                    <TableCell>
                      <Chip
                        label={shipment.status}
                        color={
                          shipment.status === 'Delivered' ? 'success' :
                          shipment.status === 'In Transit' ? 'primary' :
                          'warning'
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{shipment.estimatedDelivery}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        href={`/tracking?id=${shipment.trackingNumber}`}
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

export default ShippingPage;
