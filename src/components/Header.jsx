import { AppBar, Typography } from "@mui/material"

const Header = ({ children }) => {

  return(
    <AppBar
      position="sticky"

    >
      <Typography>{children}</Typography>
    </AppBar>
  )
};

export default Header