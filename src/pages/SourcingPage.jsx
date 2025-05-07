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
  Avatar
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';

const SourcingPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [quantity, setQuantity] = useState('');
  const [budget, setBudget] = useState('');
  const [selectedAgent, setSelectedAgent] = useState(null);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNext();
  };

  const handleAgentSelect = (agentId) => {
    setSelectedAgent(agentId);
    handleNext();
  };

  const steps = ['Submit Request', 'Select Agent', 'Review & Confirm'];

  const mockAgents = [
    {
      id: 1,
      name: 'Zhang Wei',
      country: 'China',
      specialty: 'Electronics & Manufacturing',
      rating: 4.8,
      experience: '7 years',
      successfulDeals: 342
    },
    {
      id: 2,
      name: 'Ananya Patel',
      country: 'India',
      specialty: 'Textiles & Handicrafts',
      rating: 4.6,
      experience: '5 years',
      successfulDeals: 213
    },
    {
      id: 3,
      name: 'David Ndlovu',
      country: 'South Africa',
      specialty: 'Machinery & Equipment',
      rating: 4.9,
      experience: '9 years',
      successfulDeals: 456
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
                  <InputLabel id="country-label">Source Country</InputLabel>
                  <Select
                    labelId="country-label"
                    id="country"
                    value={country}
                    label="Source Country"
                    onChange={handleCountryChange}
                  >
                    <MenuItem value="China">China</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="South Africa">South Africa</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel id="category-label">Product Category</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category"
                    value={category}
                    label="Product Category"
                    onChange={handleCategoryChange}
                  >
                    <MenuItem value="Electronics">Electronics</MenuItem>
                    <MenuItem value="Machinery">Machinery</MenuItem>
                    <MenuItem value="Textiles">Textiles</MenuItem>
                    <MenuItem value="Construction">Construction Materials</MenuItem>
                    <MenuItem value="Agricultural">Agricultural Equipment</MenuItem>
                    <MenuItem value="Furniture">Furniture</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="product-details"
                  label="Product Details & Specifications"
                  multiline
                  rows={4}
                  fullWidth
                  value={productDetails}
                  onChange={(e) => setProductDetails(e.target.value)}
                  placeholder="Provide as much detail as possible about the product you're looking for..."
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="quantity"
                  label="Quantity Required"
                  fullWidth
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="budget"
                  label="Budget (USD)"
                  fullWidth
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
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
              Select a Sourcing Agent
            </Typography>
            <Grid container spacing={3}>
              {mockAgents
                .filter(agent => !country || agent.country === country)
                .map((agent) => (
                <Grid item xs={12} md={4} key={agent.id}>
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      border: selectedAgent === agent.id ? '2px solid #1976d2' : 'none',
                      '&:hover': {
                        boxShadow: 3,
                      }
                    }}
                    onClick={() => handleAgentSelect(agent.id)}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                          {agent.name.charAt(0)}
                        </Avatar>
                        <Typography variant="h6">
                          {agent.name}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        <strong>Country:</strong> {agent.country}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        <strong>Specialty:</strong> {agent.specialty}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        <strong>Rating:</strong> {agent.rating}/5.0
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        <strong>Experience:</strong> {agent.experience}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Successful Deals:</strong> {agent.successfulDeals}
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
                disabled={!selectedAgent}
              >
                Next
              </Button>
            </Box>
          </Box>
        );
      case 2:
        const selectedAgentData = mockAgents.find(agent => agent.id === selectedAgent);
        return (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Review Your Sourcing Request
            </Typography>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Product Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Source Country"
                    secondary={country}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Product Category"
                    secondary={category}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Product Details"
                    secondary={productDetails}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Quantity"
                    secondary={quantity}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Budget"
                    secondary={`$${budget} USD`}
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle1" gutterBottom>
                Selected Agent
              </Typography>
              {selectedAgentData && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                    <BusinessIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2">
                      {selectedAgentData.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedAgentData.country} • {selectedAgentData.specialty}
                    </Typography>
                  </Box>
                </Box>
              )}
            </Paper>

            <Typography variant="body2" paragraph color="text.secondary">
              By confirming this request, you'll connect with your selected agent who will begin sourcing your product.
              They'll provide you with supplier options and pricing within 2-3 business days.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
              >
                Confirm Request
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
          Global Sourcing
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Connect with verified suppliers in China, India, and South Africa to source high-quality products for your business in Zambia.
        </Typography>
      </Paper>

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
    </Box>
  );
};

export default SourcingPage;
