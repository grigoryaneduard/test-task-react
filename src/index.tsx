import React from 'react';
import ReactDOM from 'react-dom';
import {AppBar, Container, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./style";
import './index.scss';
import CategoryList from "./componets/CategoryList";
import Gallery from "./componets/Gallery";

function App() {
    const classes = useStyles();

    return <>
        <AppBar position="static" className={classes.appBar}>
            <Typography variant="h6" className={classes.title}>
                Gallery
            </Typography>
        </AppBar>

        <Container>
            <Grid container spacing={1}>
                <Grid item xs={2}><CategoryList/></Grid>
                <Grid item xs={10}><Gallery/></Grid>
            </Grid>
        </Container>
    </>;
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

