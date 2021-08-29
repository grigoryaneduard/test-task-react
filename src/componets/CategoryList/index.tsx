import {useEffect} from "react";
import {observer} from "mobx-react";
import CategoryItem from "../CategoryItem";
import {useStores} from "../../use-stores";

const CategoryList = observer(() => {
    const {categoryStore, galleryStore} = useStores();

    useEffect(() => {
        categoryStore.fetch();
    }, [categoryStore]);

    function onSelected(id: string) {
        galleryStore.fetchByCategoryId(id);
    }

    return (
        <>
            <h2>Categories</h2>
            {categoryStore.data.length === 0 && <p>No Category</p>}
            {categoryStore.data.map(category =>
                <CategoryItem key={category.id} category={category} onSelect={onSelected}/>)}
        </>
    );
});


export default CategoryList;