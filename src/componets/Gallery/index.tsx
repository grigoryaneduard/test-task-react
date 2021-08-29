import {observer} from "mobx-react";
import ImageViewer from "../ImageViewer";
import {useStores} from "../../use-stores";

const Gallery = observer(() => {
    const {galleryStore} = useStores();

    return (
        <>
            {galleryStore.data.length === 0 && <p>There isn't selected category</p>}
            {galleryStore.data.map(cat => {
                return <ImageViewer key={cat.id} data={cat}/>;
            })}
        </>
    );
});

export default Gallery;