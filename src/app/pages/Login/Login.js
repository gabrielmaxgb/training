import { Grid } from "@mui/material";
import { useState } from "react";
import { FullHeightGrid, StyledTextField } from "./LoginStyles";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  console.log(user)


  return (
    <FullHeightGrid
      container 
      spacing={2} 
      alignItems="center" 
      justifyContent="center"
    >
      <Grid 
        container 
        item 
        xs={12} 
        sm={12} 
        direction="column" 
        alignItems="center" 
        justifyContent="center"
      >
        <StyledTextField
          label="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <StyledTextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
    </FullHeightGrid>
  );
};

export default Login;