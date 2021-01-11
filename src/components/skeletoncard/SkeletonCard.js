import React from "react";
import Skeleton from "react-loading-skeleton";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider } from "@material-ui/core";
import Card from './Card'

const useStyles = makeStyles((theme) => ({
    divider: {
        margin: 4,
    },
}));
const SkeletonCard = () => {
    const classes = useStyles();
    return (<>

        <Grid contianer justify="center" alignItems="center" className={classes.divider} >

            <Skeleton height={30} width={`90%`} />
            <Divider className={classes.divider} orientation="vertical" />
            {Array(9)
                .fill()
                .map((item, index) => (
                    <Card key={index}></Card>
                ))}
        </Grid >
    </>
    );
};
export default SkeletonCard;