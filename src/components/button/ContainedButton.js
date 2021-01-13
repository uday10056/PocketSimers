import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        borderRadius: 30
    },
}));

const ContainedButton = (props) => {
    const classes = useStyles();
    return (<>

        <Button fullWidth="true" classes={{ root: classes.root }} variant={props.type} endIcon={props.icon || null} color="primary">
            {props.name}
        </Button >
    </>);
}

export default ContainedButton;