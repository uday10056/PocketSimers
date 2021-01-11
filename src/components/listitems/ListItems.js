import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        color: "#FFF"
    },
    Button: {
        marginRight: theme.spacing(2),
        textTransform: 'capitalize',
    },
    // visib: {
    //     display: 'inline',
    //     [theme.breakpoints.down("sm")]: {
    //         display: 'none'
    //     },
    //     [theme.breakpoints.up("md")]: {
    //         display: 'block',
    //     },
    //     [theme.breakpoints.up("lg")]: {
    //         display: 'block',
    //     },
    // },
}
));
export default function AppBarFunction() {

    const classes = useStyles();
    return (

        <Grid container alignItems="flex-end" direction="column">
            <Grid classes={{ root: classes.root }}>
                {/* <div className={classes.visib}> */}
                <Button color="inherit" className={classes.Button} ><Typography variant="button">Skins</Typography></Button>
                <Button color="inherit" className={classes.Button} ><Typography variant="button">Wallpapers</Typography></Button>
                <Button color="inherit" className={classes.Button}><Typography variant="button">Sounds</Typography></Button>

                <Button color="inherit" className={classes.Button} variant="outlined" startIcon={<AccountCircleSharpIcon fontSize="large" />} style={{ borderRadius: 20, }} >
                    <Typography variant="button">Login / Sign Up</Typography>
                </Button>
                {/* </div> */}
            </Grid>
        </Grid>


    )
}