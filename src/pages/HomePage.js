import React, { useState} from 'react';
import { Container,Box, TextField, Button, Paper, List, ListItem, ListItemText, Typography ,Toolbar} from '@mui/material';
import TopBar from '../components/TopBar';



const drawerWidth = 240;
const HomePage = () => {
  const [state, setState] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: `Ola! Sou o Sistema de Pre-Avaliação de Sintomas. Quais são os seus Sintomas` }]);
  const [input, setInput] = useState('');


  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');

      
    }
  };
  const toggleDrawer = (open)  => {
    setState(open);
  }

  return (
    <Container component="main" style={{ maxWidth: '900px' }}> 
      <Toolbar />
      <TopBar
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        title={"Home page"}
      />
        <Paper elevation={3} style={{ maxHeight: '60vh', overflow: 'auto', padding: '1rem' }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index} style={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <ListItemText
                primary={msg.text}
                style={{
                  backgroundColor: msg.sender === 'user' ? '#e0f7fa' : '#f1f1f1',
                  padding: '0.5rem',
                  borderRadius: '10px',
                  maxWidth: '80%',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box 
        
      >
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        style={{ marginTop: '1rem' }}
      />
      <Button variant="contained" color="primary" onClick={sendMessage} style={{ marginTop: '0.5rem' }}>
        Send
      </Button> 
      </Box>  

      </Container>
  );
}

export default HomePage;