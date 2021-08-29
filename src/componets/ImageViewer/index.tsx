import {CardMedia} from "@material-ui/core";
import {observer} from "mobx-react";
import {IGallery} from "../../stores/GalleryStore";
import {useStyles} from "./style";

interface IProps {
    data: IGallery;
}

const ImageViewer = observer(({data}: IProps) => {
    const classes = useStyles();

    return (
        <CardMedia
            className={classes.media}
            image={data.url}
            title={data.name}
        />
    );
});


export default ImageViewer;