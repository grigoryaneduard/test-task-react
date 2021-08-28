import {Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import {observer} from "mobx-react";
import {ICat} from "../../stores/CatStore";

const useStyles = makeStyles({
    root: {
        width: 345,
        margin: 10,
        display: "inline-block"
    },
    media: {
        height: 140,
    },
});

interface IProps {
    cat: ICat;
}

const CatItem = observer(({cat}: IProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={cat.src}
                    title={cat.name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {cat.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});


export default CatItem;