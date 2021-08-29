import {observer} from "mobx-react";
import CategoryItem from "../CategoryItem";
import {useStores} from "../../use-stores";

const CategoryList = observer(() => {
    const {categoryStore} = useStores();

    return (
        <>
            <h2>Categories</h2>
            {categoryStore.categories.length === 0 && <p>No Category</p>}
            {categoryStore.categories.map(category => {
                return <CategoryItem key={category.id} category={category}/>;
            })}
        </>
    );
});


export default CategoryList;