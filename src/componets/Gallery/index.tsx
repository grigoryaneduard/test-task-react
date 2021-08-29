import {observer} from "mobx-react";
import ImageViewer from "../ImageViewer";
import {useStores} from "../../use-stores";
import {Button, Grid} from '@material-ui/core';
import {Container} from "./style";

const Gallery = observer(() => {
    const {galleryStore} = useStores();

    function onLoadMore() {
        galleryStore.loadMore();
    }

    return (
        <Container>
            <Grid item xs={12}>
                {galleryStore.data.length === 0 && <p>There isn't selected category</p>}

                {galleryStore.data.length > 0 &&
                <h3>Your selected category name: {galleryStore.data[0].categories[0].name.toUpperCase()}</h3>}
            </Grid>


            {galleryStore.data.map(item => <ImageViewer key={item.id} data={item}/>)}

            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                {galleryStore.data.length > 0 &&
                <Button variant="contained" color="primary" onClick={() => onLoadMore()}>
                    Load more
                </Button>}
            </Grid>


        </Container>
    );
});

export default Gallery;