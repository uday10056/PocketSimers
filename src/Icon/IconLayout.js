import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";



// const useStyles = makeStyles((theme) => ({
//     iconButton: {
//         padding: 10,
//         backgroundColor: props.bgColor,
//         marginRight: 2,
//         color: "#000"

//     },
// }));

export default function (props) {
    // const classes = useStyles();
    return (
        <IconButton
            style={{
                padding: 10,
                backgroundColor: props.bgColor,
                marginRight: 2,
                color: (props.color || "#000")
            }}
            type="submit"
            aria-label="search"
        >
            {props.children}
        </IconButton>
    );
}