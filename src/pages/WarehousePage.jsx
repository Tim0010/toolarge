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
  Tabs,
  Tab,
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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider
} from '@mui/material';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// We'll use TextField with type="date" instead of DatePicker
import InventoryIcon from '@mui/icons-material/Inventory';
import StorageIcon from '@mui/icons-material/Storage';

const WarehousePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [warehouseLocation, setWarehouseLocation] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [storageType, setStorageType] = useState('');
  const [spaceRequired, setSpaceRequired] = useState('');
  const [openBookingDialog, setOpenBookingDialog] = useState(false);
  const [selectedInventoryItem, setSelectedInventoryItem] = useState(null);
  const [inventoryAction, setInventoryAction] = useState('');
  const [quantity, setQuantity] = useState('');
  const [openInventoryDialog, setOpenInventoryDialog] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleWarehouseLocationChange = (event) => {
    setWarehouseLocation(event.target.value);
  };

  const handleStorageTypeChange = (event) => {
    setStorageType(event.target.value);
  };

  const handleOpenBookingDialog = () => {
    setOpenBookingDialog(true);
  };

  const handleCloseBookingDialog = () => {
    setOpenBookingDialog(false);
  };

  const handleBookStorage = () => {
    // In a real app, this would save the booking to a database
    handleCloseBookingDialog();
  };

  const handleInventoryAction = (item, action) => {
    setSelectedInventoryItem(item);
    setInventoryAction(action);
    setOpenInventoryDialog(true);
  };

  const handleCloseInventoryDialog = () => {
    setOpenInventoryDialog(false);
    setQuantity('');
  };

  const handleInventoryActionSubmit = () => {
    // In a real app, this would update inventory in a database
    handleCloseInventoryDialog();
  };

  const mockWarehouses = [
    {
      id: 1,
      name: 'Lusaka Central Warehouse',
      location: 'Lusaka',
      availability: 'High',
      pricingPerDay: {
        palletStorage: 4.50,
        bulkStorage: 2.75,
        securedStorage: 6.00
      }
    },
    {
      id: 2,
      name: 'Ndola Fulfillment Center',
      location: 'Ndola',
      availability: 'Medium',
      pricingPerDay: {
        palletStorage: 4.00,
        bulkStorage: 2.50,
        securedStorage: 5.50
      }
    },
    {
      id: 3,
      name: 'Kitwe Distribution Hub',
      location: 'Kitwe',
      availability: 'Low',
      pricingPerDay: {
        palletStorage: 3.75,
        bulkStorage: 2.25,
        securedStorage: 5.25
      }
    }
  ];

  const mockStorageBookings = [
    {
      id: 'WH-2025-001',
      warehouse: 'Lusaka Central Warehouse',
      storageType: 'Pallet Storage',
      startDate: '2025-05-01',
      endDate: '2025-05-30',
      space: '10 pallets',
      status: 'Active',
      cost: '$1,350'
    },
    {
      id: 'WH-2025-002',
      warehouse: 'Ndola Fulfillment Center',
      storageType: 'Secured Storage',
      startDate: '2025-05-15',
      endDate: '2025-06-15',
      space: '5 units',
      status: 'Scheduled',
      cost: '$825'
    }
  ];

  const mockInventory = [
    {
      id: 'INV-001',
      name: 'Smartphones - XYZ Model',
      quantity: 250,
      warehouseLocation: 'Lusaka Central Warehouse',
      storageType: 'Secured Storage',
      arrivalDate: '2025-04-20',
      status: 'In Stock'
    },
    {
      id: 'INV-002',
      name: 'Textile Fabrics - Cotton',
      quantity: 45,
      warehouseLocation: 'Ndola Fulfillment Center',
      storageType: 'Bulk Storage',
      arrivalDate: '2025-04-25',
      status: 'In Stock'
    },
    {
      id: 'INV-003',
      name: 'Solar Panels - 250W',
      quantity: 30,
      warehouseLocation: 'Lusaka Central Warehouse',
      storageType: 'Pallet Storage',
      arrivalDate: '2025-05-05',
      status: 'In Transit'
    }
  ];

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Warehouse Management
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Book and manage storage space in fulfillment centers across Zambia, and track your inventory.
        </Typography>
      </Paper>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="warehouse tabs">
          <Tab label="Available Warehouses" />
          <Tab label="My Storage Bookings" />
          <Tab label="Inventory Management" />
        </Tabs>
      </Box>

      {activeTab === 0 && (
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">
              Available Warehouses
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<AddIcon />}
              onClick={handleOpenBookingDialog}
            >
              Book Storage
            </Button>
          </Box>
          
          <Grid container spacing={3}>
            {mockWarehouses.map((warehouse) => (
              <Grid item xs={12} md={4} key={warehouse.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {warehouse.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Location:</strong> {warehouse.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Availability:</strong> {' '}
                      <Chip 
                        size="small" 
                        label={warehouse.availability} 
                        color={
                          warehouse.availability === 'High' ? 'success' : 
                          warehouse.availability === 'Medium' ? 'primary' : 
                          'error'
                        }
                      />
                    </Typography>
                    
                    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
                      Pricing (per day):
                    </Typography>
                    
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <StorageIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Pallet Storage" 
                          secondary={`$${warehouse.pricingPerDay.palletStorage.toFixed(2)} per pallet`}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <WarehouseIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Bulk Storage" 
                          secondary={`$${warehouse.pricingPerDay.bulkStorage.toFixed(2)} per sqm`}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <InventoryIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Secured Storage" 
                          secondary={`$${warehouse.pricingPerDay.securedStorage.toFixed(2)} per unit`}
                        />
                      </ListItem>
                    </List>
                    
                    <Box sx={{ mt: 2 }}>
                      <Button 
                        variant="outlined" 
                        fullWidth
                        onClick={handleOpenBookingDialog}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}

      {activeTab === 1 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Your Storage Bookings
          </Typography>
          
          {mockStorageBookings.length > 0 ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Booking ID</TableCell>
                    <TableCell>Warehouse</TableCell>
                    <TableCell>Storage Type</TableCell>
                    <TableCell>Date Range</TableCell>
                    <TableCell>Space</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Cost</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockStorageBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>{booking.id}</TableCell>
                      <TableCell>{booking.warehouse}</TableCell>
                      <TableCell>{booking.storageType}</TableCell>
                      <TableCell>{`${booking.startDate} to ${booking.endDate}`}</TableCell>
                      <TableCell>{booking.space}</TableCell>
                      <TableCell>
                        <Chip 
                          label={booking.status} 
                          color={booking.status === 'Active' ? 'success' : 'primary'} 
                          size="small" 
                        />
                      </TableCell>
                      <TableCell>{booking.cost}</TableCell>
                      <TableCell>
                        <IconButton size="small" aria-label="edit">
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="body1" color="text.secondary">
                You don't have any storage bookings yet.
              </Typography>
              <Button 
                variant="contained" 
                sx={{ mt: 2 }}
                startIcon={<AddIcon />}
                onClick={handleOpenBookingDialog}
              >
                Book Storage Now
              </Button>
            </Box>
          )}
        </Paper>
      )}

      {activeTab === 2 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Your Inventory
          </Typography>
          
          {mockInventory.length > 0 ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Warehouse</TableCell>
                    <TableCell>Storage Type</TableCell>
                    <TableCell>Arrival Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockInventory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.warehouseLocation}</TableCell>
                      <TableCell>{item.storageType}</TableCell>
                      <TableCell>{item.arrivalDate}</TableCell>
                      <TableCell>
                        <Chip 
                          label={item.status} 
                          color={item.status === 'In Stock' ? 'success' : 'primary'} 
                          size="small" 
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton 
                          size="small" 
                          aria-label="add" 
                          onClick={() => handleInventoryAction(item, 'add')}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                        <IconButton 
                          size="small" 
                          aria-label="remove" 
                          onClick={() => handleInventoryAction(item, 'remove')}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="body1" color="text.secondary">
                You don't have any inventory items yet.
              </Typography>
            </Box>
          )}
        </Paper>
      )}

      {/* Storage Booking Dialog */}
      <Dialog open={openBookingDialog} onClose={handleCloseBookingDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Book Warehouse Storage</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="warehouse-label">Select Warehouse</InputLabel>
                  <Select
                    labelId="warehouse-label"
                    value={warehouseLocation}
                    label="Select Warehouse"
                    onChange={handleWarehouseLocationChange}
                  >
                    {mockWarehouses.map((warehouse) => (
                      <MenuItem key={warehouse.id} value={warehouse.name}>
                        {warehouse.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Start Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="End Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel id="storage-type-label">Storage Type</InputLabel>
                  <Select
                    labelId="storage-type-label"
                    value={storageType}
                    label="Storage Type"
                    onChange={handleStorageTypeChange}
                  >
                    <MenuItem value="Pallet Storage">Pallet Storage</MenuItem>
                    <MenuItem value="Bulk Storage">Bulk Storage (per sqm)</MenuItem>
                    <MenuItem value="Secured Storage">Secured Storage</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Space Required"
                  fullWidth
                  value={spaceRequired}
                  onChange={(e) => setSpaceRequired(e.target.value)}
                  placeholder={storageType === 'Pallet Storage' ? 'Number of pallets' : storageType === 'Bulk Storage' ? 'Square meters' : 'Number of units'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Special Requirements"
                  multiline
                  rows={2}
                  fullWidth
                  placeholder="Any special storage requirements..."
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseBookingDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleBookStorage}>Book Storage</Button>
        </DialogActions>
      </Dialog>

      {/* Inventory Action Dialog */}
      <Dialog open={openInventoryDialog} onClose={handleCloseInventoryDialog} maxWidth="xs" fullWidth>
        <DialogTitle>
          {inventoryAction === 'add' ? 'Add to Inventory' : 'Remove from Inventory'}
        </DialogTitle>
        <DialogContent>
          {selectedInventoryItem && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                {selectedInventoryItem.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Current Quantity: {selectedInventoryItem.quantity}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <TextField
                autoFocus
                label="Quantity"
                type="number"
                fullWidth
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                inputProps={{ min: 1 }}
                helperText={`Quantity to ${inventoryAction === 'add' ? 'add to' : 'remove from'} inventory`}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInventoryDialog}>Cancel</Button>
          <Button 
            variant="contained" 
            onClick={handleInventoryActionSubmit}
            color={inventoryAction === 'add' ? 'primary' : 'secondary'}
          >
            {inventoryAction === 'add' ? 'Add' : 'Remove'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default WarehousePage;
