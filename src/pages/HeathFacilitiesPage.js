import React, { useState, useEffect } from 'react';
import { Toolbar,Paper,Container, List, ListItem, ListItemText, Typography, CircularProgress } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TopBar from '../components/TopBar';

const healthFacilities = [
    { name: 'Clinica A', lat: 37.7749, lng: -122.4194, type: 'Clinica', status: 'Livre' },
    { name: 'Hospital B', lat: 37.8044, lng: -122.2711, type: 'Hospital', status: 'Cheio' },
    { name: 'Clinica C', lat: 37.7749, lng: -122.4313, type: 'Clinica', status: 'Muito Cheio' },
    // Add more facilities as needed
  ];
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Radius of the Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};
const drawerWidth=240
const HealthFacilitiesPage = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [distances, setDistances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(false);

    const toggleDrawer = (open)  => {
        setState(open);
      }
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }, []);
  
    useEffect(() => {
      if (userLocation) {
        const calculatedDistances = healthFacilities.map((facility) => ({
          ...facility,
          distance: calculateDistance(
            userLocation.lat,
            userLocation.lng,
            facility.lat,
            facility.lng
          ).toFixed(2), // Distance in km rounded to 2 decimals
        }));
        setDistances(calculatedDistances);
        setLoading(false);
      }
    }, [userLocation]);
  
    return (
      <Container>
              <Toolbar />
      <TopBar
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        title={"Estabelecimentos de Saude"}
      />
        <Typography variant="h4" gutterBottom>
          Hospitais, Clinicas e Centros de Saude
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
            <TableContainer component={Paper}>
            <Table  aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="center">Distatancia</TableCell>
                  <TableCell align="center">Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {distances.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="center">{row.distance}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    );
  };
  
  export default HealthFacilitiesPage;