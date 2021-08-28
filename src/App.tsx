import React from 'react';
import './App.css';
import styled from "styled-components";
import {AppBar, Container, Grid, Typography} from "@material-ui/core";
import CategoryList from "./componets/CategoryList";
import CatList from "./componets/CatList";

const StyledApp = styled.div`
  background-color: #f4f6f8;
  height: 100%;
`;

function App() {
    return <StyledApp>
        <AppBar position="relative" color={'primary'} style={{padding: 0}}>
            <Typography variant="h6" color="inherit" style={{padding: 10, textAlign: 'center'}}>
                Gallery
            </Typography>
        </AppBar>

        <Container>
            <Grid container spacing={1}>
                <Grid item xs={3}><CategoryList /></Grid>
                <Grid item xs={9}><CatList /></Grid>
            </Grid>
        </Container>
    </StyledApp>;
}

export default App;
