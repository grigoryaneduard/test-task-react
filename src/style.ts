import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            height: 60,
        },
        title: {
            margin: 15,
            textAlign: 'center',
        },
    }),
);
