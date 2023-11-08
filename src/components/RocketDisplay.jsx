import Paper from '@mui/material/Paper';
import RocketDisplayItem from './RocketDisplayItem';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const RocketDisplayList = ({ rocketData }) => {

  return (
    <Paper sx={{ width: '90%', }}>
      <StyledGrid container spacing={2}>
      {rocketData.map(rocket =>
        <RocketDisplayItem
          key={rocket.id}
          rocket={rocket}
        />)}

      </StyledGrid>
    </Paper>
  );
};

export default RocketDisplayList;
