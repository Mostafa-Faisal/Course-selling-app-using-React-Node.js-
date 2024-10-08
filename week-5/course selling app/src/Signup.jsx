import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card} from '@mui/material';
import { Typography } from '@mui/material';
import { useCallback, useState } from 'react';

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {/* {email};<br/>
      {password}; */}
      <center>
        <div style={{ width: 400, padding: 30, paddingTop: 150 }}>
          <Typography variant='h4'>
            Welcome to Fai-Tech. <br/>
            Signup Page Here
          </Typography>
          <center>
            <Card variant="outlined" style={{ padding: 20 }}>
              <TextField 
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                fullWidth={true}
                required
                
                label="Email"
              />
              <br/>
              <TextField
                fullWidth={true}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
              <br/> <br/>
              <div style={{ display: "flex", justifyContent: "left" }}>
                <Button 
                
                variant="contained"
                onClick={() => {

                  function callback2(data) {
                    localStorage.setItem("token", data.token);
                  }


                  function useCallback1(res) {
                    res.json().then(callback2)
                  }
                  
                  fetch("http://localhost:3000/admin/signup", {
                    method: "POST",
                    body: JSON.stringify({
                      username: email,
                      password: password,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                    
                  })
                  .then(useCallback1)
                    
                }}
                
                >Sign Up</Button>
              </div>
            </Card>
          </center>
        </div>
      </center>
    </div>
  );
}

export default Signup;
