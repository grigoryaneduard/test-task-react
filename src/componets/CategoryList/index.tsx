import {useEffect, useState} from "react";
import {observer} from "mobx-react";
import CategoryItem from "../CategoryItem";
import {useStores} from "../../use-stores";

const CategoryList = observer(() => {
    const [selectedId, changeSelectedId] = useState(0);

    const {categoryStore, galleryStore} = useStores();

    useEffect(() => {
        categoryStore.fetch();
    }, [categoryStore]);

    function onSelected(id: number) {
        changeSelectedId(id);
        galleryStore.fetchByCategoryId(id);
    }

    return (
        <>
            <h2>Categories</h2>
            {categoryStore.data.length === 0 && <p>No Category</p>}
            {categoryStore.data.map(category =>
                <CategoryItem key={category.id} category={category} onSelect={onSelected}
                              isSelected={category.id === selectedId}/>)}
        </>
    );
});


export default CategoryList;