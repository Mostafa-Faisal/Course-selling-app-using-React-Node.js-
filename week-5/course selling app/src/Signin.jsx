import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function Signin() {
  return (
    <div>
      <center>
        <div style={{ width: 400, padding: 30, paddingTop: 150 }}>
          <Typography variant='h4'>
            Welcome Back. <br/>
            Sign In Here
          </Typography>
          <center>
            <Card variant="outlined" style={{ padding: 20 }}>
              <TextField
                fullWidth={true}
                required
                id="outlined-required"
                label="Email"
              />
              <br/>
              <TextField
                fullWidth={true}
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
              <br/> <br/>
              <div style={{ display: "flex", justifyContent: "left" }}>
                <Button variant="contained">Sign In</Button>
              </div>
            </Card>
          </center>
        </div>
      </center>
    </div>
  );
}

export default Signin;
