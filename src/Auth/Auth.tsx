import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <Stack
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper sx={{ padding: "10px", minWidth: "450px" }}>
        <Stack spacing={5}>
          <Typography textAlign="center" variant="h4" color="primary">
            {isSignIn ? 'Login' : 'Sign Up'}
          </Typography>
          <TextField id="email" label="Email" variant="outlined" fullWidth />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
          />
          {!isSignIn && (
            <TextField
                id="confirm password"
                label="Confirm Password"
                variant="outlined"
                fullWidth
            />
          )}
          <Button variant="contained">{isSignIn ? 'Login' : 'Sign Up'}</Button>
        </Stack>
        <Typography>
          {isSignIn ? (
            <>
                "Don't have an account"  <Button onClick={() => setIsSignIn(false)}>Sign Up</Button>
            </>
          ) : (
            <>
                "I already have an account."  <Button onClick={() => setIsSignIn(true)}>Login</Button>
            </>
          )}
        </Typography>
      </Paper>
    </Stack>
  );
};

export default Auth;
