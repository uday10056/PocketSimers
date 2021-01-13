import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { Paper } from "@material-ui/core/";
import Switch from "@material-ui/core/Switch";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Grid } from "@material-ui/core/";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CancelIcon from '@material-ui/icons/Cancel';
import IndividualSkin from '../skincards/skincard/IndividualSkin';
import ContainedButton from '../button/ContainedButton';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShareCopyButton from '../button/sharecopybutton/ShareCopyButton';
const useStyles = makeStyles((theme) => ({
    form: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "fit-content"
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120
    },
    formControlLabel: {
        marginTop: theme.spacing(1)
    },
    mainTitle: {
        fontWeight: "bold",
        paddingTop: 2,
    },
    tags: {
        fontSize: "smaller",
        paddingTop: 2,
    },
    link: {
        fontSize: "1em",
        fontWeight: "bold",
        paddingTop: 2,
    },
    playStoreLink: {
        fontSize: "smaller",
        paddingTop: 2,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(2),
        top: theme.spacing(0.5),
    },
    menuButton: {
        flexGrow: 1,
    },


}));

export default function MaxWidthDialog(props) {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(false);
    // const [fullWidth, setFullWidth] = React.useState(true);
    // const [maxWidth, setMaxWidth] = React.useState("lg");

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };


    return (
        <React.Fragment>

            <Dialog
                fullWidth="true"
                maxWidth="lg"
                open={props.modalStatus}
                onClose={props.handleClose}
                aria-labelledby="full-details"
            >
                <AppBar color="transparent" elevation={0} position="static">
                    <Toolbar>
                        <Grid container justify="flex-end"><Grid item>
                            <IconButton edge="end" color="primary" onClick={props.handleClose} aria-label="close">
                                <CancelIcon />
                            </IconButton></Grid></Grid>

                    </Toolbar>
                </AppBar>

                <DialogContent>
                    <Grid container ><Grid item xs={12} sm={6} md={6} lg={5} >
                        <Grid container justifty="center">
                            <Grid item>
                                <IndividualSkin></IndividualSkin>
                            </Grid>
                        </Grid></Grid><Grid item item sm={6} xs={12} lg={7} md={6}>
                            <Grid container justify="space-evenly" alignContent="center" alignItems="center" >
                                <Grid item xs={12} sm={10} md={5} lg={4}><ContainedButton name="Add To Collection" type="outlined"></ContainedButton></Grid>
                                <Grid item xs={12} sm={10} md={5} lg={4}><ContainedButton name="Download" type="contained" icon={<PlayForWorkIcon />} ></ContainedButton></Grid>
                                <Grid item xs={12} sm={10} md={5} lg={3}><Grid container><Grid item><ShareCopyButton color1="#ccc" color2="primary" /></Grid></Grid> </Grid>
                            </Grid>

                            <Grid container justify="center" alignItems="center">
                                <Grid item sm={10} xs={10} md={10} lg={10} >
                                    <Typography className={classes.mainTitle} align="left" variant="subtitle1" color="textSecondary" >
                                        Neon Demon Skin for Mack 203
                                </Typography>
                                    <Typography className={classes.tags} align="left" variant="subtitle2" color="primary">
                                        #WTDS#TruckSkins#MackSkins
                                </Typography>
                                    <Typography className={classes.link} align="left" variant="subtitle1" color="primary"  >
                                        Game Link
                    </Typography>
                                    <Typography className={classes.playStoreLink} align="left" variant="subtitle2" noWrap="true" color="textSecondary" >
                                        https://play.google.com/store/apps/details?id=com.dynamic-Like
                    </Typography>
                                </Grid>


                            </Grid>
                        </Grid>
                    </Grid>




                    <DialogActions>
                        <Button onClick={props.handleClose} color="primary">
                            Close
          </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog >
        </React.Fragment >
    );
}
