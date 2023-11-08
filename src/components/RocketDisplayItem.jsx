import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import useTitle from '../hooks/useTitle';


 
const RocketDisplayItem = ({ rocket }) => {
  const {title, createTitle } = useTitle('rocket');

  useEffect(() => {
    console.log('rocket', rocket);
    createTitle(rocket.id)
  }, [rocket, createTitle]);

  return (
    <Grid item xs={12}>
      <Card
        sx={{
          maxWidth: '200px',
          border: '1px solid #282c34'
        }}
      >
        <CardHeader
        title={title}
        subheader={`First Flight: ${rocket.first_flight} `} 
        />
      <pre>
              {JSON.stringify(rocket, null, 2)}

        </pre>
      </Card>  
    </Grid>
  )
};

export default RocketDisplayItem
