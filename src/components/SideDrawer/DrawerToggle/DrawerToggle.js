import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconLayout from '../../../Icon/IconLayout';

const useStyles = makeStyles((theme) => ({
    DrawerToggle: {
        color: '#FFF',
        width: '40px',
        height: '100',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space - around',
        alignItems: 'center',
        padding: '10px 0',
        boxSizing: 'border-box',
        cursor: 'pointer',
        [theme.breakpoints.up("md")]: {
            display: 'none'
        },
    },


}));

const DrawerToggle = (props) => {
    const classes = useStyles();
    return (

        <IconButton color="inherit" className={classes.DrawerToggle} onClick={props.clicked}>
            <MoreVertIcon color="inherit"   ></MoreVertIcon>
        </IconButton>

    )

};

export default DrawerToggle;