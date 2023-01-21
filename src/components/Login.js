import React from "react";
import { Avatar,
     FormControlLabel,
      Grid,
       Paper,
        TextField,
         Button,
          Typography,
            Checkbox, } from "@mui/material";
            import {Link} from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {  } from "@mui/system";

export default function Login() {
    const paperStyle= {
        height: "70vh",
        width: 300,
        padding: 30,
        margin: "30px auto",
    };
    const avatarStyle={
        backgroundColor: "#3287db"
    };
    const commonstyle={
        marginTop: 15,
        marginBottom: 15,
    };
    return (
        <>
        <Grid>
            <Paper elevation={7} style= {paperStyle}>
                <Grid align= "center">
                <Avatar style={avatarStyle}>
                <LockOutlinedIcon/>
            </Avatar>
            <h2>Login</h2>
                </Grid> 
                <TextField 
                variant="standard" 
                label="Username" 
                placeholder="Enter user name" 
                fullWidth required/>
               
                <TextField 
                variant="standard" 
                label="Password" 
                placeholder="Enter Password" 
                type={"password"} 
                fullWidth required
                style={commonstyle}/>
             <FormControlLabel 
             control={<Checkbox defaultChecked />} 
             label="Remember me" />
             <Button 
             variant="contained" fullWidth>
                Signup
             </Button>
             <Typography>
                <Link href="#"> Forget Password</Link>
             </Typography>
             <Typography style={commonstyle}>
               Don't have Account 
               <Link to="/signup"> Create Account</Link>
             </Typography>
            </Paper>
        </Grid>
        </>
    );
}