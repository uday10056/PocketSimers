import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';


const useStyles = makeStyles({
    root: {
        marginTop: 20,
        marginBottom: 20,
        maxWidth: 345,
        color: "white",
    },
    showClass: {
        display: '',
    },
    hideClass: {
        display: 'none',
    },
    titleColor:
    {
        color: "white",
    }
});


export default function ImgMediaCard(props) {
    const [showState, toggleShow] = useState(false);
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{
            backgroundImage: `url("https://cdn.discordapp.com/attachments/418467296395132928/798100013824999424/unknown.png")`, backgroundPepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover", height: "300px",
            minWidth: 300,
        }} onMouseEnter={() => {
            toggleShow(true)
        }} onMouseLeave={() => {
            toggleShow(false)
        }} >
            <CardContent><Grid container>
                <Grid item>


                    <CardHeader classes={{ subheader: classes.titleColor, title: classes.titleColor, avatar: classes.titleColor }} className={showState ? classes.showClass : classes.hideClass}

                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
          </Avatar>
                        }
                        action={

                            <IconButton color="inherit" aria-label=" settings">
                                <PlayForWorkIcon fontSize="large" />
                            </IconButton>


                        }
                        title={props.title}
                        subheader={props.publishedBy}

                    />



                </Grid>
            </Grid></CardContent>



        </Card >
    );
}