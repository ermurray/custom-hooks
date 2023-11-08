import './App.css';
import CustomButton from './CustomButton';
import Box from '@mui/material/Box';
import RocketDisplay from './RocketDisplay';
import { TextField, Typography } from '@mui/material';
import useApplicationData from '../hooks/useApplicationData';
import Header from './Header';
import useTitle from '../hooks/useTitle';
import { useEffect } from 'react';

function App() {
  const {rockets, getRockets} = useApplicationData();
  const {title, createTitle} = useTitle('page');

  useEffect(() => {
    createTitle('SpaceX Rockets')
  }, [createTitle])

  return (
    <>
      <Header>
        {title}
      </Header>
      <Box className="App"
        sx={{
          minHeight: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 2
        }}
      >
        {rockets.length >= 1
          ? (
            <RocketDisplay
              rocketData={rockets}
            />
          ):(
            <Typography>No Rockets to Display</Typography>
          )}
        <CustomButton
          clickHandler={getRockets}
          label='Get me a rocket to look at'
        />
          <TextField
          label={'fancy input blah blah blah blah blah'}
          sx={{ mt: 2 }}
        />
      </Box>

  </>
  );
}

export default App;
