import React from "react";
import { Avatar,
     FormControlLabel,
      Grid,
       Paper,
        TextField,
         Button,
            Checkbox, 
        Typography,
     } from "@mui/material";
     import {Link} from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {  } from "@mui/system";

export default function Signup() {
    const paperStyle= {
        height: "105vh",
        width: 280,
        padding: 20,
        margin: "20px auto",
    };
    const avatarStyle={
        backgroundColor: "#3287db"
    };
    const commonstyle={
        marginTop: 5,
        marginBottom: 5,
    };
    return (
        <>
        <Grid>
            <Paper elevation={7} style= {paperStyle}>
                <Grid align= "center">
                <Avatar style={avatarStyle}>
                <LockOutlinedIcon/>
            </Avatar>
            <h2>Signup</h2>
                </Grid> 

                <TextField 
                variant="standard" 
                label="Username" 
                placeholder="Enter username" 
                type={"string"} 
                fullWidth required/>
               
                <TextField 
                variant="standard" 
                label="Password" 
                placeholder="Enter Password" 
                type={"password"} 
                fullWidth required
                style={commonstyle}/>
                
                <TextField 
                variant="standard" 
                label="Confirm Password" 
                placeholder="Enter Confirm Password" 
                type={"password"} 
                fullWidth required
                style={commonstyle}/>

                <TextField 
                variant="standard" 
                label="First Name" 
                placeholder="Enter first name"
                type={"string"}  
                fullWidth required
                style={commonstyle}/>

                <TextField 
                variant="standard" 
                label="Last Name" 
                placeholder="Enter last name"  
                type={"string"}
                fullWidth required
                style={commonstyle}/>

                <TextField 
                variant="standard" 
                label="Date of birth" 
                type={"text"}
                placeholder="Enter date of birth"  
                fullWidth required
                style={commonstyle}/>

                <TextField 
                variant="standard" 
                label="Age" 
                placeholder="Enter age"  
                fullWidth required
                style={commonstyle}/>

                <TextField 
                variant="standard" 
                label="Phone Number" 
                placeholder="Enter your Phone Number"  
                fullWidth required
                style={commonstyle}/>
             
             <FormControlLabel 
             control={<Checkbox defaultChecked />} 
             label="Remember me" />
             <Button 
             variant="contained" fullWidth>
                Signup
             </Button>
             <Typography style={commonstyle}>
                Already have an account
                <Link to='/Login'> Click here </Link>
             </Typography>
            </Paper>
        </Grid>
        </>
    );
}