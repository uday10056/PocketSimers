import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
    },
}));
export default function () {
    const classes = useStyles();
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl className={classes.formControl} >
            <Select
                disableUnderline={true}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                className={classes.selectEmpty}
            >
                <MenuItem value="">
                    All Items
                </MenuItem>
                <MenuItem value={10}>GTS 2</MenuItem>
                <MenuItem value={20}>BusID</MenuItem>
                <MenuItem value={30}>WTDS</MenuItem>
            </Select>
        </FormControl>
    )

}
