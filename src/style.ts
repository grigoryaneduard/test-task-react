import styled from "styled-components";
import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const StyledApp = styled.div`
  background-color: aliceblue;
  height: 100%;
`;

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
