import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Typography, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        marginBottom: 20,
        maxWidth: 345,
    },
    minimumPadding: {
        margin: 0,
        padding: 0,
        marginBlockStart: 0,
        marginBlockEnd: 0,
        marginBottom: 0,
        fontSize: "small",

    },
    darkTitle: {
        fontSize: "medium",
        color: "#000",
        fontWeight: 500
    },
    transparentBg: {
        backgroundColor: "transparent"
    },
    onLeft: {
        padding: 0,
        paddingTop: 5
    }
})
);

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <Card elevation={0} classes={{ root: classes.transparentBg }} className={classes.root}>

            <CardActionArea onClick={props.handleClickOpen}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={props.image}
                    title="Contemplative Reptile"

                />
                <CardContent justify="flex-start" classes={{ root: classes.onLeft }}>
                    <Typography className={classes.minimumPadding} classes={{ root: classes.darkTitle }} align="left" variant="body2" color="textSecondary" >
                        {props.title}
                    </Typography>
                    <Typography className={classes.minimumPadding} align="left" variant="body2" color="textSecondary">
                        {props.publishedBy} <IconButton disabled edge="start" fontSize=" small"><CheckCircleIcon fontSize="small" style={{ fontSize: 12, color: "#707070" }}></CheckCircleIcon></IconButton>
                    </Typography>
                    <Typography className={classes.minimumPadding} align="left" variant="body2" color="textSecondary" >
                        {props.downloads}k downloads | {props.ago} ago
                    </Typography>



                </CardContent>
            </CardActionArea >

        </Card >
    );
}