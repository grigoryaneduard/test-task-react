import {observer} from "mobx-react";
import CatItem from "../CatItem";
import {useStores} from "../../use-stores";

const CatList = observer(() => {
    const {catStore} = useStores();

    return (
        <>
            {catStore.cats.length === 0 && <p>There isn't selected category</p>}
            {catStore.cats.map(cat => {
                return <CatItem key={cat.id} cat={cat}/>;
            })}
        </>
    );
});

export default CatList;