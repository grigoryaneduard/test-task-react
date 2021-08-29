import {useEffect, useState} from "react";
import {observer} from "mobx-react";
import CategoryItem from "../CategoryItem";
import {useStores} from "../../use-stores";

const CategoryList = observer(() => {
    const [selectedId, changeSelectedId] = useState('');

    const {categoryStore, galleryStore} = useStores();

    useEffect(() => {
        categoryStore.fetch();
    }, [categoryStore]);

    function onSelected(id: string) {
        changeSelectedId(id);
        galleryStore.fetchByCategoryId(id);
    }

    return (
        <>
            <h2>Categories</h2>
            {categoryStore.data.length === 0 && <p>No Category</p>}
            {categoryStore.data.map(category =>
                <CategoryItem key={category.id} category={category} onSelect={onSelected}
                              isSelected={category.id.toString() === selectedId}/>)}
        </>
    );
});


export default CategoryList;