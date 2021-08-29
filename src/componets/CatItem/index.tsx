import {CardMedia} from "@material-ui/core";
import {observer} from "mobx-react";
import {ICat} from "../../stores/CatStore";
import {useStyles} from "./style";

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