import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';


const useStyles = makeStyles({
    root: {
        marginTop: 20,
        marginBottom: 20,
        maxWidth: 345,
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={props.image}
                    title="Contemplative Reptile"

                />
                <CardContent>

                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
          </Avatar>
                        }
                        action={

                            <IconButton aria-label="settings">
                                <PlayForWorkIcon fontSize="large" />
                            </IconButton>


                        }
                        title={props.title}
                        subheader={props.publishedBy}

                    />

                </CardContent>
            </CardActionArea>

        </Card>
    );
}