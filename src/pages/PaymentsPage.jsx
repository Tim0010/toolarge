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
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab
} from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoneyIcon from '@mui/icons-material/Money';

const PaymentsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [openInvoiceDialog, setOpenInvoiceDialog] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [openCardDialog, setOpenCardDialog] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleOpenPaymentDialog = (invoice) => {
    setSelectedInvoice(invoice);
    setOpenPaymentDialog(true);
  };

  const handleClosePaymentDialog = () => {
    setOpenPaymentDialog(false);
  };

  const handleProcessPayment = () => {
    // In a real app, this would process the payment
    handleClosePaymentDialog();
  };

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setOpenInvoiceDialog(true);
  };

  const handleCloseInvoiceDialog = () => {
    setOpenInvoiceDialog(false);
  };

  const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleOpenCardDialog = () => {
    setOpenCardDialog(true);
  };

  const handleCloseCardDialog = () => {
    setOpenCardDialog(false);
  };

  const mockInvoices = [
    {
      id: 'INV-2025-001',
      service: 'Global Sourcing - Electronics',
      amount: 850,
      dueDate: '2025-05-15',
      status: 'Pending',
      description: 'Sourcing agent fee for electronics products from China'
    },
    {
      id: 'INV-2025-002',
      service: 'Shipping - Ocean Freight',
      amount: 1250,
      dueDate: '2025-05-20',
      status: 'Pending',
      description: 'International shipping from Guangzhou to Lusaka'
    },
    {
      id: 'INV-2025-003',
      service: 'Warehousing - Storage',
      amount: 450,
      dueDate: '2025-05-10',
      status: 'Paid',
      description: 'One month storage at Lusaka Central Warehouse'
    },
    {
      id: 'INV-2025-004',
      service: 'Domestic Logistics',
      amount: 120,
      dueDate: '2025-05-08',
      status: 'Overdue',
      description: 'Local delivery from warehouse to business location'
    }
  ];

  const mockTransactions = [
    {
      id: 'TRX-2025-001',
      date: '2025-04-28',
      amount: 450,
      service: 'Warehousing - Storage',
      paymentMethod: 'Credit Card',
      status: 'Completed'
    },
    {
      id: 'TRX-2025-002',
      date: '2025-04-15',
      amount: 750,
      service: 'Global Sourcing - Textiles',
      paymentMethod: 'Mobile Money',
      status: 'Completed'
    },
    {
      id: 'TRX-2025-003',
      date: '2025-04-10',
      amount: 980,
      service: 'Shipping - Air Freight',
      paymentMethod: 'Bank Transfer',
      status: 'Completed'
    }
  ];

  const mockPaymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      name: 'Visa ending in 4242',
      icon: <CreditCardIcon />,
      isDefault: true
    },
    {
      id: 2,
      type: 'Mobile Money',
      name: 'MTN Mobile Money',
      icon: <PhoneAndroidIcon />,
      isDefault: false
    },
    {
      id: 3,
      type: 'Bank Transfer',
      name: 'Zambia National Bank',
      icon: <AccountBalanceIcon />,
      isDefault: false
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Paid':
        return 'success';
      case 'Pending':
        return 'primary';
      case 'Overdue':
        return 'error';
      case 'Completed':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Payments
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Manage and process payments for sourcing, shipping, warehousing, and logistics services.
        </Typography>
      </Paper>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="payment tabs">
          <Tab label="Invoices" />
          <Tab label="Transaction History" />
          <Tab label="Payment Methods" />
        </Tabs>
      </Box>

      {activeTab === 0 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Your Invoices
          </Typography>
          
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Invoice ID</TableCell>
                  <TableCell>Service</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell>{invoice.id}</TableCell>
                    <TableCell>{invoice.service}</TableCell>
                    <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                    <TableCell>{invoice.dueDate}</TableCell>
                    <TableCell>
                      <Chip 
                        label={invoice.status} 
                        color={getStatusColor(invoice.status)} 
                        size="small" 
                      />
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="outlined" 
                        size="small" 
                        sx={{ mr: 1 }}
                        onClick={() => handleViewInvoice(invoice)}
                        startIcon={<VisibilityIcon />}
                      >
                        View
                      </Button>
                      {invoice.status !== 'Paid' && (
                        <Button 
                          variant="contained" 
                          size="small"
                          onClick={() => handleOpenPaymentDialog(invoice)}
                          startIcon={<PaymentsIcon />}
                        >
                          Pay
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}

      {activeTab === 1 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Transaction History
          </Typography>
          
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Transaction ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Service</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Payment Method</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.service}</TableCell>
                    <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                    <TableCell>{transaction.paymentMethod}</TableCell>
                    <TableCell>
                      <Chip 
                        label={transaction.status} 
                        color={getStatusColor(transaction.status)} 
                        size="small" 
                      />
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="outlined" 
                        size="small"
                        startIcon={<ReceiptIcon />}
                      >
                        Receipt
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}

      {activeTab === 2 && (
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">
              Payment Methods
            </Typography>
            <Button 
              variant="contained" 
              onClick={handleOpenCardDialog}
              startIcon={<CreditCardIcon />}
            >
              Add Payment Method
            </Button>
          </Box>
          
          <Grid container spacing={3}>
            {mockPaymentMethods.map((method) => (
              <Grid item xs={12} md={4} key={method.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    border: selectedPaymentMethod === method.id ? '2px solid #1976d2' : 'none',
                    '&:hover': {
                      boxShadow: 3,
                    }
                  }}
                  onClick={() => handleSelectPaymentMethod(method.id)}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ mr: 2, color: 'primary.main' }}>
                        {method.icon}
                      </Box>
                      <Typography variant="h6">
                        {method.type}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" paragraph>
                      {method.name}
                    </Typography>
                    
                    {method.isDefault && (
                      <Chip 
                        label="Default" 
                        color="primary" 
                        size="small" 
                        sx={{ mb: 2 }}
                      />
                    )}
                    
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button size="small">Edit</Button>
                      {!method.isDefault && (
                        <Button size="small">Set as Default</Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}

      {/* Payment Dialog */}
      <Dialog open={openPaymentDialog} onClose={handleClosePaymentDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Make Payment</DialogTitle>
        <DialogContent>
          {selectedInvoice && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Invoice Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Invoice ID
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {selectedInvoice.id}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Service
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {selectedInvoice.service}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Amount
                  </Typography>
                  <Typography variant="body1" gutterBottom fontWeight="bold">
                    ${selectedInvoice.amount.toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Due Date
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {selectedInvoice.dueDate}
                  </Typography>
                </Grid>
              </Grid>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="subtitle1" gutterBottom>
                Payment Details
              </Typography>
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="payment-method-label">Payment Method</InputLabel>
                <Select
                  labelId="payment-method-label"
                  value={paymentMethod}
                  label="Payment Method"
                  onChange={handlePaymentMethodChange}
                >
                  {mockPaymentMethods.map((method) => (
                    <MenuItem key={method.id} value={method.id}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ mr: 1 }}>
                          {method.icon}
                        </Box>
                        <Typography>
                          {method.name}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              
              {paymentMethod === 1 && (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="CVV"
                      type="password"
                      InputProps={{ inputProps: { maxLength: 3 } }}
                    />
                  </Grid>
                </Grid>
              )}
              
              {paymentMethod === 2 && (
                <Typography variant="body2" color="text.secondary">
                  You will receive a prompt on your mobile device to complete this payment.
                </Typography>
              )}
              
              {paymentMethod === 3 && (
                <Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Please use the following details to complete your bank transfer:
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="Bank:" secondary="Zambia National Bank" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Account Name:" secondary="Toolage International Ltd" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Account Number:" secondary="00152938475" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Reference:" secondary={selectedInvoice.id} />
                    </ListItem>
                  </List>
                </Box>
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePaymentDialog}>Cancel</Button>
          <Button 
            variant="contained" 
            onClick={handleProcessPayment}
            startIcon={<PaymentsIcon />}
            disabled={!paymentMethod}
          >
            Process Payment
          </Button>
        </DialogActions>
      </Dialog>

      {/* Invoice Dialog */}
      <Dialog open={openInvoiceDialog} onClose={handleCloseInvoiceDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Invoice Details</DialogTitle>
        <DialogContent>
          {selectedInvoice && (
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">
                  Invoice
                </Typography>
                <Chip 
                  label={selectedInvoice.status} 
                  color={getStatusColor(selectedInvoice.status)} 
                />
              </Box>
              
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Invoice ID
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {selectedInvoice.id}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Date Issued
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {new Date(new Date(selectedInvoice.dueDate).getTime() - 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Due Date
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {selectedInvoice.dueDate}
                  </Typography>
                </Grid>
              </Grid>
              
              <Typography variant="subtitle1" gutterBottom>
                Service Details
              </Typography>
              
              <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Service</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{selectedInvoice.service}</TableCell>
                      <TableCell>{selectedInvoice.description}</TableCell>
                      <TableCell align="right">${selectedInvoice.amount.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2} align="right">
                        <Typography variant="subtitle2">Total:</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="subtitle1" fontWeight="bold">
                          ${selectedInvoice.amount.toFixed(2)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              
              <Typography variant="subtitle2" gutterBottom>
                Payment Information
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Please make payment by the due date to avoid any service interruptions.
              </Typography>
              
              {selectedInvoice.status !== 'Paid' && (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button 
                    variant="contained" 
                    onClick={() => {
                      handleCloseInvoiceDialog();
                      handleOpenPaymentDialog(selectedInvoice);
                    }}
                    startIcon={<PaymentsIcon />}
                  >
                    Pay Now
                  </Button>
                </Box>
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInvoiceDialog}>Close</Button>
          <Button startIcon={<ReceiptIcon />}>Download PDF</Button>
        </DialogActions>
      </Dialog>

      {/* Add Payment Method Dialog */}
      <Dialog open={openCardDialog} onClose={handleCloseCardDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Add Payment Method</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel id="new-payment-method-label">Payment Method Type</InputLabel>
              <Select
                labelId="new-payment-method-label"
                label="Payment Method Type"
                defaultValue="credit"
              >
                <MenuItem value="credit">Credit/Debit Card</MenuItem>
                <MenuItem value="mobile">Mobile Money</MenuItem>
                <MenuItem value="bank">Bank Account</MenuItem>
              </Select>
            </FormControl>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Cardholder Name"
                  placeholder="As it appears on the card"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Card Number"
                  placeholder="XXXX XXXX XXXX XXXX"
                  InputProps={{ inputProps: { maxLength: 19 } }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Expiry Date"
                  placeholder="MM/YY"
                  InputProps={{ inputProps: { maxLength: 5 } }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="CVV"
                  type="password"
                  placeholder="XXX"
                  InputProps={{ inputProps: { maxLength: 3 } }}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCardDialog}>Cancel</Button>
          <Button 
            variant="contained" 
            onClick={handleCloseCardDialog}
          >
            Save Payment Method
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PaymentsPage;
