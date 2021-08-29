import {observer} from "mobx-react";
import ImageViewer from "../ImageViewer";
import {useStores} from "../../use-stores";

const Gallery = observer(() => {
    const {galleryStore} = useStores();

    return (
        <>
            {galleryStore.data.length === 0 && <p>There isn't selected category</p>}
            {galleryStore.data.length > 0 &&
            <h1 style={{textAlign: 'center'}}>Your selected category
                name: {galleryStore.data[0].categories[0].name}</h1>}
            {galleryStore.data.map(item => <ImageViewer key={item.id} data={item}/>)}
        </>
    );
});

export default Gallery;