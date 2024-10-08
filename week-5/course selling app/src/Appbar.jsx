import { Typography } from "@mui/material";
import Button from '@mui/material/Button';


function Appbar() {
    
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
      <div>
        <Typography>Coursera</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginRight: 5 }}>
          <Button variant={"contained"}
          onClick={() => {
            window.location = "/signup";
          }}
          >
            Signup
          </Button>
        </div>
        <div>
          <Button
            variant={"contained"}
            onClick={() => {
              window.location = "/signin";
            }}
            >
            Signin
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;


