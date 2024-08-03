import React, { useState} from 'react';
import { Link,Stack,Container,Box, TextField, Button, Paper, List, ListItem, ListItemText, Typography ,Toolbar} from '@mui/material';
import TopBar from '../components/TopBar';

const mensagensAleatorias =[ 
  { sender: 'bot',link:"http://localhost:3000/facilities?type=Centro_de_Saude", text: `De acordo com os simptomas descritos deve procurar um centro de saude mais proximo de Si. Click no link a seguir para ver as opções de Centro de Saude` },
  { sender: 'bot',link:"http://localhost:3000/facilities?type=Hospital", text: `De acordo com os simptomas descritos deve procurar as urgencias. Click no link para ver A localizaçao ou ligue para 0000000.` },
  { sender: 'bot', text: `Informaçoes insuficientes. Por Favor descreva com mais detalhes quais os sintomas.` }
]

const drawerWidth = 240;
const HomePage = () => {

  const [state, setState] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: `Ola! Sou o Sistema de Pre-Avaliação de Sintomas. Quais são os seus Sintomas` }]);
  const [input, setInput] = useState('');


  const sendMessage = () => {
    if (input.trim()) {
      const randomIndex = Math.floor(Math.random() * mensagensAleatorias.length);
      const message = mensagensAleatorias[randomIndex];

      setMessages([...messages, { sender: 'user', text: input },message]);
      setInput('');

      
        
   
      
    }
  };
  const toggleDrawer = (open)  => {
    setState(open);
  }

  return (
    <Container component="main" style={{ maxWidth: '900px',height: '98vh',display: 'flex', flexDirection: 'column' }}> 
      <Toolbar />
      <TopBar
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        title={"Chatbot"}
      />
      <Stack justifyContent="space-between">
        <Paper elevation={3} style={{height: '75vh', overflow: 'auto' }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index} style={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <ListItemText
                
      
                style={{
                  backgroundColor: msg.sender === 'user' ? '#e0f7fa' : '#f1f1f1',
                  padding: '0.5rem',
                  borderRadius: '10px',
                  maxWidth: '80%',
                }}
              >
                {msg.text} {msg.link && (
                        <Link href={msg.link}>Link</Link>
                      )}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box 
        
      >
      <Stack direction="row">
           
           <TextField
        variant="outlined"
        fullWidth
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        style={{ marginTop: '1rem' }}
      />

      <Button variant="contained" color="primary" onClick={sendMessage} style={{ marginTop: '1rem'  }}>
        Send
      </Button> 
      </Stack>
      </Box>  
      </Stack>

      </Container>
  );
}

export default HomePage;