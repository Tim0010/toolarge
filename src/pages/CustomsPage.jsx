import React, { useState, useEffect } from 'react';
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
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Alert
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import InfoIcon from '@mui/icons-material/Info';

const CustomsPage = () => {
  const [productCategory, setProductCategory] = useState('');
  const [productValue, setProductValue] = useState('');
  const [weight, setWeight] = useState('');
  const [origin, setOrigin] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationResult, setCalculationResult] = useState(null);
  const [error, setError] = useState('');

  const handleProductCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleCalculate = () => {
    // Validate inputs
    if (!productCategory || !productValue || !origin) {
      setError('Please fill in all required fields');
      return;
    }

    if (isNaN(parseFloat(productValue)) || parseFloat(productValue) <= 0) {
      setError('Product value must be a positive number');
      return;
    }

    // Clear any previous errors
    setError('');
    
    // Simulate calculation process
    setIsCalculating(true);
    
    // Mock calculation - in a real app this would call an API
    setTimeout(() => {
      const value = parseFloat(productValue);
      
      // Different duty rates based on product category
      const dutyRates = {
        'Electronics': 0.25,
        'Machinery': 0.2,
        'Textiles': 0.3,
        'Furniture': 0.35,
        'Vehicles': 0.4,
        'Agricultural': 0.15,
        'Pharmaceuticals': 0.1,
        'Construction': 0.25,
        'Food': 0.2,
        'Other': 0.25
      };
      
      const dutyRate = dutyRates[productCategory];
      const customsDuty = value * dutyRate;
      
      // VAT is typically 16% in Zambia
      const vat = value * 0.16;
      
      // Processing fees
      const processingFee = 85; // Fixed fee in USD
      
      // Clearance fees vary slightly by origin
      const clearanceRates = {
        'China': 120,
        'India': 110, 
        'South Africa': 95
      };
      
      const clearanceFee = clearanceRates[origin];
      
      // Total customs cost
      const totalCost = customsDuty + vat + processingFee + clearanceFee;
      
      setCalculationResult({
        customsDuty,
        vat,
        processingFee,
        clearanceFee,
        totalCost,
        dutyRate,
        vatRate: 0.16
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Customs Calculator
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Estimate import duties, taxes, and clearance fees for products being imported into Zambia.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Calculate Import Costs
            </Typography>
            
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="product-category-label">Product Category</InputLabel>
                  <Select
                    labelId="product-category-label"
                    id="product-category"
                    value={productCategory}
                    label="Product Category"
                    onChange={handleProductCategoryChange}
                  >
                    <MenuItem value="Electronics">Electronics</MenuItem>
                    <MenuItem value="Machinery">Machinery</MenuItem>
                    <MenuItem value="Textiles">Textiles</MenuItem>
                    <MenuItem value="Furniture">Furniture</MenuItem>
                    <MenuItem value="Vehicles">Vehicles & Parts</MenuItem>
                    <MenuItem value="Agricultural">Agricultural Equipment</MenuItem>
                    <MenuItem value="Pharmaceuticals">Pharmaceuticals</MenuItem>
                    <MenuItem value="Construction">Construction Materials</MenuItem>
                    <MenuItem value="Food">Food Products</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="product-value"
                  label="Product Value (USD)"
                  fullWidth
                  value={productValue}
                  onChange={(e) => setProductValue(e.target.value)}
                  type="number"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  id="weight"
                  label="Weight (kg, optional)"
                  fullWidth
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  type="number"
                />
              </Grid>
              
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="origin-label">Country of Origin</InputLabel>
                  <Select
                    labelId="origin-label"
                    id="origin"
                    value={origin}
                    label="Country of Origin"
                    onChange={handleOriginChange}
                  >
                    <MenuItem value="China">China</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="South Africa">South Africa</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  startIcon={<CalculateIcon />}
                >
                  Calculate Import Costs
                </Button>
                
                {isCalculating && (
                  <LinearProgress sx={{ mt: 2 }} />
                )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            {!calculationResult && !isCalculating && (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <InfoIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Your calculation results will appear here
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fill in the form and click calculate to see the estimated import costs
                </Typography>
              </Box>
            )}
            
            {calculationResult && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Import Cost Breakdown
                </Typography>
                
                <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          <Typography variant="subtitle2">
                            Customs Duty ({(calculationResult.dutyRate * 100).toFixed(0)}%)
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          ${calculationResult.customsDuty.toFixed(2)} USD
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          <Typography variant="subtitle2">
                            VAT (16%)
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          ${calculationResult.vat.toFixed(2)} USD
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          <Typography variant="subtitle2">
                            Processing Fee
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          ${calculationResult.processingFee.toFixed(2)} USD
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          <Typography variant="subtitle2">
                            Clearance Fee
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          ${calculationResult.clearanceFee.toFixed(2)} USD
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                            Total Import Cost
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            ${calculationResult.totalCost.toFixed(2)} USD
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                
                <Alert severity="info" sx={{ mb: 2 }}>
                  This is an estimate based on current rates. Actual costs may vary.
                </Alert>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="subtitle2" gutterBottom>
                  Need help with customs clearance?
                </Typography>
                <Button 
                  variant="outlined" 
                  sx={{ mt: 1 }}
                  href="/shipping"
                >
                  Book Customs Clearance Service
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
      
      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Zambian Import Duty Information
        </Typography>
        <Typography variant="body2" paragraph>
          Import duties in Zambia are regulated by the Zambia Revenue Authority (ZRA) and are based on the CIF (Cost, Insurance, and Freight) value of goods.
        </Typography>
        
        <Typography variant="subtitle2" gutterBottom>
          Common Import Charges:
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Customs Duty
                </Typography>
                <Typography variant="body2">
                  Ranges from 0% to 25% depending on the type of goods being imported. Capital goods and raw materials generally attract lower duty rates than finished consumer goods.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Value-Added Tax (VAT)
                </Typography>
                <Typography variant="body2">
                  Standard rate of 16% applied on the customs value plus duty. Some essential goods may be exempt or zero-rated.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Other Fees
                </Typography>
                <Typography variant="body2">
                  Including processing fees, clearance charges, and possibly excise duty on certain products such as alcohol, tobacco, and luxury goods.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CustomsPage;
