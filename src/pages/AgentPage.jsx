import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Tab,
  Tabs,
  Badge,
  IconButton,
  InputBase,
  Chip
} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PhoneIcon from '@mui/icons-material/Phone';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonIcon from '@mui/icons-material/Person';

const AgentPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent);

    // Load mock conversation for the demo
    if (agent.id === 1) {
      setMessages(mockConversations[0].messages);
    } else {
      setMessages([]);
    }
  };

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: messageInput,
      timestamp: new Date().toISOString()
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');

    // Simulate agent response for demo purposes
    setTimeout(() => {
      const agentResponse = {
        id: messages.length + 2,
        sender: 'agent',
        text: "Thank you for your message. I'll check on the status of your shipment and get back to you within the next few hours. Is there any specific information you need about this shipment?",
        timestamp: new Date().toISOString()
      };

      setMessages(prevMessages => [...prevMessages, agentResponse]);
    }, 2000);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const mockAgents = [
    {
      id: 1,
      name: 'Zhang Wei',
      country: 'China',
      specialty: 'Electronics & Manufacturing',
      status: 'online',
      lastActive: 'Just now',
      avatar: null
    },
    {
      id: 2,
      name: 'Ananya Patel',
      country: 'India',
      specialty: 'Textiles & Handicrafts',
      status: 'offline',
      lastActive: '2 hours ago',
      avatar: null
    },
    {
      id: 3,
      name: 'David Ndlovu',
      country: 'South Africa',
      specialty: 'Machinery & Equipment',
      status: 'online',
      lastActive: '5 min ago',
      avatar: null
    }
  ];

  const mockCases = [
    {
      id: 'CASE-2025-001',
      title: 'Sourcing Electronics Components',
      agent: 'Zhang Wei',
      status: 'In Progress',
      lastUpdated: '2025-05-06'
    },
    {
      id: 'CASE-2025-002',
      title: 'Textile Samples Request',
      agent: 'Ananya Patel',
      status: 'Awaiting Supplier Response',
      lastUpdated: '2025-05-05'
    },
    {
      id: 'CASE-2025-003',
      title: 'Machinery Pricing Inquiry',
      agent: 'David Ndlovu',
      status: 'Completed',
      lastUpdated: '2025-05-02'
    }
  ];

  const mockConversations = [
    {
      agentId: 1,
      messages: [
        {
          id: 1,
          sender: 'agent',
          text: "Hello! I'm Zhang Wei, your sourcing agent for electronics components. How can I assist you today?",
          timestamp: '2025-05-06T09:30:00Z'
        },
        {
          id: 2,
          sender: 'user',
          text: "Hi Zhang, I'm looking for 500 units of the XYZ microcontroller we discussed earlier. Can you check availability and lead times?",
          timestamp: '2025-05-06T09:32:00Z'
        },
        {
          id: 3,
          sender: 'agent',
          text: "I'll contact our suppliers in Shenzhen right away. I should have preliminary information by tomorrow. Is there a specific deadline you're working with?",
          timestamp: '2025-05-06T09:35:00Z'
        },
        {
          id: 4,
          sender: 'user',
          text: "We need them by mid-June at the latest. Also, please check if they can provide the technical documentation in English.",
          timestamp: '2025-05-06T09:38:00Z'
        },
        {
          id: 5,
          sender: 'agent',
          text: "Noted. I'll ensure to request the English documentation and confirm the delivery timeline. I'll also negotiate for the best possible pricing based on this quantity.",
          timestamp: '2025-05-06T09:40:00Z'
        }
      ]
    }
  ];

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Agent Support
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Connect with your dedicated sourcing and logistics agents for questions, updates, and assistance.
        </Typography>
      </Paper>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="agent tabs">
          <Tab label="Your Agents" />
          <Tab label="Support Cases" />
        </Tabs>
      </Box>

      {activeTab === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ height: '100%' }}>
              <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant="h6">
                  Your Assigned Agents
                </Typography>
              </Box>

              <List sx={{ height: '70vh', overflow: 'auto' }}>
                {mockAgents.map((agent) => (
                  <ListItem
                    button
                    key={agent.id}
                    onClick={() => handleAgentSelect(agent)}
                    selected={selectedAgent && selectedAgent.id === agent.id}
                    sx={{
                      bgcolor: (selectedAgent && selectedAgent.id === agent.id) ? 'action.selected' : 'transparent',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    <ListItemAvatar>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        color={agent.status === 'online' ? 'success' : 'default'}
                      >
                        <Avatar>
                          {agent.avatar ? <img src={agent.avatar} alt={agent.name} /> : agent.name.charAt(0)}
                        </Avatar>
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText
                      primary={agent.name}
                      secondary={
                        <Box component="span">
                          <Typography component="span" variant="body2" color="text.primary">
                            {agent.country}
                          </Typography>
                          {` — ${agent.specialty}`}
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            {selectedAgent ? (
              <Paper sx={{ height: '70vh', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                      color={selectedAgent.status === 'online' ? 'success' : 'default'}
                    >
                      <Avatar sx={{ mr: 2 }}>
                        {selectedAgent.avatar ? <img src={selectedAgent.avatar} alt={selectedAgent.name} /> : selectedAgent.name.charAt(0)}
                      </Avatar>
                    </Badge>
                    <Box>
                      <Typography variant="subtitle1">
                        {selectedAgent.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {selectedAgent.status === 'online' ? 'Online' : `Last active ${selectedAgent.lastActive}`}
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <IconButton>
                      <PhoneIcon />
                    </IconButton>
                    <IconButton>
                      <VideoCallIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2, bgcolor: '#f5f5f5' }}>
                  {messages.map((message) => (
                    <Box
                      key={message.id}
                      sx={{
                        display: 'flex',
                        justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                        mb: 2
                      }}
                    >
                      {message.sender === 'agent' && (
                        <Avatar sx={{ mr: 1, width: 32, height: 32 }}>
                          {selectedAgent.name.charAt(0)}
                        </Avatar>
                      )}

                      <Box
                        sx={{
                          maxWidth: '70%',
                          p: 2,
                          borderRadius: 2,
                          bgcolor: message.sender === 'user' ? 'primary.main' : 'background.paper',
                          color: message.sender === 'user' ? 'primary.contrastText' : 'text.primary',
                          boxShadow: 1
                        }}
                      >
                        <Typography variant="body1">
                          {message.text}
                        </Typography>
                        <Typography variant="caption" sx={{ display: 'block', textAlign: 'right', mt: 0.5 }}>
                          {formatTimestamp(message.timestamp)}
                        </Typography>
                      </Box>

                      {message.sender === 'user' && (
                        <Avatar sx={{ ml: 1, width: 32, height: 32, bgcolor: 'secondary.main' }}>
                          <PersonIcon />
                        </Avatar>
                      )}
                    </Box>
                  ))}
                </Box>

                <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs>
                      <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                        elevation={0}
                        variant="outlined"
                      >
                        <InputBase
                          sx={{ ml: 1, flex: 1 }}
                          placeholder="Type your message..."
                          value={messageInput}
                          onChange={handleMessageChange}
                          onKeyPress={handleKeyPress}
                          multiline
                          maxRows={4}
                        />
                        <IconButton sx={{ p: '10px' }}>
                          <AttachFileIcon />
                        </IconButton>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={handleSendMessage}
                        disabled={!messageInput.trim()}
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            ) : (
              <Paper sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <SupportAgentIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Select an agent to start chatting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Your assigned agents are available to assist you with sourcing, shipping, and logistics inquiries.
                  </Typography>
                </Box>
              </Paper>
            )}
          </Grid>
        </Grid>
      )}

      {activeTab === 1 && (
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">
              Your Support Cases
            </Typography>
            <Button
              variant="contained"
              startIcon={<SupportAgentIcon />}
            >
              Create New Case
            </Button>
          </Box>

          <Grid container spacing={3}>
            {mockCases.map((supportCase) => (
              <Grid item xs={12} md={4} key={supportCase.id}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="h6">
                        {supportCase.title}
                      </Typography>
                      <Chip
                        label={supportCase.status}
                        color={
                          supportCase.status === 'Completed' ? 'success' :
                          supportCase.status === 'In Progress' ? 'primary' :
                          'warning'
                        }
                        size="small"
                      />
                    </Box>

                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Case ID:</strong> {supportCase.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Assigned Agent:</strong> {supportCase.agent}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Last Updated:</strong> {supportCase.lastUpdated}
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                      <Button variant="outlined" fullWidth>
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default AgentPage;
