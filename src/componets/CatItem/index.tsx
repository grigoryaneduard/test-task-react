import {CardMedia, makeStyles} from "@material-ui/core";
import {observer} from "mobx-react";
import {ICat} from "../../stores/CatStore";

const useStyles = makeStyles({
    media: {
        display: "inline-block",
        margin: 10,
        width: 345,
        height: 140,
    },
});

interface IProps {
    cat: ICat;
}

const CatItem = observer(({cat}: IProps) => {
    const classes = useStyles();

    return (
        <CardMedia
            className={classes.media}
            image={cat.src}
            title={cat.name}
        />
    );
});


export default CatItem;