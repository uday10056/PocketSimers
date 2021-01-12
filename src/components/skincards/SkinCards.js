import react from 'react';
import { Grid } from '@material-ui/core'
import SkinCard from "../../components/skincards/skincard/SkinCard";

const SkinCards = ({ list }) => {
    return (<>
        <Grid container>
            {list.items.map((item, index) => {
                return (<Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    <Grid container justify="center">
                        <Grid item>
                            <SkinCard title={item.title} publishedBy={item.publishedBy} image={item.image} ago={item.ago} downloads={item.downloads}></SkinCard>
                        </Grid>
                    </Grid>
                </Grid>
                );
            })}
        </Grid>

    </>
    )
}

export default SkinCards;