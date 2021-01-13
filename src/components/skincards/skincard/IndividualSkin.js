import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';




const IndividualSkin = () => {
    return (<Card>
        <CardActionArea>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="auto"
                image="https://cdn.discordapp.com/attachments/418467296395132928/798869620840071178/K.png"
                title="Contemplative Reptile"
            />

        </CardActionArea>
    </Card>

    );
}

export default IndividualSkin;
