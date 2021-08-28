import {observer} from "mobx-react";
import CatItem from "../CatItem";
import {useStores} from "../../use-stores";
import {Button} from "@material-ui/core";
import {StyledHeader} from "./style";

const CatList = observer(() => {
    const {catStore} = useStores();

    return (
        <>
            <StyledHeader>
                <h2>Cat List</h2>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => catStore.addCat({
                        id: 1,
                        name: "cut 1",
                        src: 'https://cdn2.thecatapi.com/images/dn.jpg'
                    })}
                >
                    Add cut
                </Button>
            </StyledHeader>

            {catStore.cats.map(cat => {
                return <CatItem key={cat.id} cat={cat}/>;
            })}
        </>
    );
});


export default CatList;