import {observer} from "mobx-react";
import CatItem from "../CatItem";
import {useStores} from "../../use-stores";

const CatList = observer(() => {
    const {catStore} = useStores();

    return (
        <>
            <h2>Cat List</h2>
            {catStore.cats.map(cat => {
                return <CatItem key={cat.id} cat={cat}/>;
            })}
        </>
    );
});


export default CatList;