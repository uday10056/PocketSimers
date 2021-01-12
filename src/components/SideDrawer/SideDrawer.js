import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { Grid, Typography } from '@material-ui/core';
import BackDrop from '../../components/Backdrop/Backdrop';


const useStyles = makeStyles((theme) => ({
    SideDrawer: {
        position: 'fixed',
        width: '280px',
        maxWidth: '70 %',
        height: '100%',
        left: '0',
        top: '0',
        zIndex: '200',
        backgroundColor: 'white',
        padding: '32px 16px',
        boxSizing: 'border - box',
        transition: 'transform 0.3s ease - out',
        [theme.breakpoints.up("md")]: {
            display: 'none'
        },
    },
    Open: {
        transform: 'translateX(0)',
    },

    Close: {
        transform: 'translateX(-100%)'
    },

    Logo: {
        height: '11%',
        marginBottom: '32px'
    },
    Button: {
        display: 'block',
        marginBottom: 20,
        width: '100%',
    },


}));

const SideDrawer = (props) => {
    const classes = useStyles();
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (<>
        <BackDrop show={props.open} clicked={props.closed}></BackDrop>
        < Grid justify="center" direction="column" alignItems="center" className={attachedClasses.join(' ')} >
            <Grid item>
                <Button color="inherit" className={classes.Button} ><Typography variant="button">Skins</Typography></Button>
                <Button color="inherit" className={classes.Button} ><Typography variant="button">Wallpapers</Typography></Button>
                <Button color="inherit" className={classes.Button}><Typography variant="button">Sounds</Typography></Button>
                <Button color="inherit" variant="outlined" startIcon={<AccountCircleSharpIcon fontSize="small" />} style={{ borderRadius: 15, }} >
                    <Typography variant="button">Login / Sign Up</Typography>
                </Button>
            </Grid>
        </Grid >
    </>
    );
};

export default SideDrawer;