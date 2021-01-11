import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, useMediaQuery } from '@material-ui/core'
import SearchBar from '../searchbar/SearchBar';
import ListItems from '../listitems/ListItems';
import Logo from '../logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: "#FFF",
    },
    title: {
        flexGrow: 1,
    },
    SearchBarCenter: {
    },
    Button: {
        marginRight: theme.spacing(2),
        textTransform: 'capitalize',
    },
}
));


export default function AppBarFunction(props) {
    const classes = useStyles();
    const themes = useTheme();
    const Desktop = useMediaQuery(themes.breakpoints.up("lg"));
    const Tablet = useMediaQuery(themes.breakpoints.up("md"));
    const Mobile = useMediaQuery(themes.breakpoints.down("sm"));
    return (
        <>
            <Grid container >
                <div className={classes.root} style={{
                    backgroundImage: `url("https://cdn.discordapp.com/attachments/418467296395132928/798100013824999424/unknown.png")`, backgroundPepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover", height: "400px"
                }}>



                    <AppBar color="transparent" elevation={0} position="static" >
                        <Toolbar>
                            <Logo></Logo>
                            {(Desktop || Tablet) && <ListItems ></ListItems>}
                            {Mobile && <Grid className={classes.root} container direction="row" justify="flex-end">
                                <Grid item>
                                    <DrawerToggle className={classes.root} clicked={props.drawerToggleClicked}> </DrawerToggle>
                                </Grid>

                            </Grid>}

                        </Toolbar>

                    </AppBar>
                    <Grid item style={{ height: "inherit" }} container alignItems="center" direction="row" justify="center" classes={{ root: classes.SearchBarCenter }}>
                        <SearchBar></SearchBar>
                    </Grid>
                </div>


            </Grid>
        </>

    )
}