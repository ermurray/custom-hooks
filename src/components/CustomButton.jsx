import Button from '@mui/material/Button';

const CustomButton = ({ clickHandler, label }) => {
  return (
    <Button
    variant='contained'
    color='primary'
    onClick={clickHandler}
    >
     {label}
    </Button>
  );
};

export default CustomButton;
