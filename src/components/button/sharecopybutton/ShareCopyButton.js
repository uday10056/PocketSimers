import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Grid, IconButton } from "@material-ui/core/";
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginLeft: "0px !important",
    },
}));

const ShareCopyButton = (props) => {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Tooltip title="Share" aria-label="Share"><IconButton><ShareIcon color={props.color1}></ShareIcon></IconButton></Tooltip>
            <Tooltip title="Copy URL" aria-label="Copy URL"><IconButton> <FileCopyIcon color={props.color2}></FileCopyIcon></IconButton></Tooltip>

        </Grid>

    );

}

export default ShareCopyButton;