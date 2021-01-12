import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LogoImage from '../../assets/images/Logo.png';

const useStyles = makeStyles((theme) => ({
    Logo: {
        padding: 8,
        height: '100%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space - around',
        alignItems: 'center',
        padding: '10px 0',
        boxSizing: 'border-box',
    },
    Image: {
        height: '100%',
        maxHeight: '40px',
    },
}));

const Logo = () => {
    const classes = useStyles();
    return (
        <div className={classes.Logo}>
            <img className={classes.Image} src={LogoImage} alt="PacketSimers"></img>
        </div>
    );
};

export default Logo;