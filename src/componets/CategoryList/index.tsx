import {observer} from "mobx-react";
import CategoryItem from "../CategoryItem";
import {useStores} from "../../use-stores";

const CategoryList = observer(() => {
    const {categoryStore} = useStores();

    return (
        <>
            <h2>Category List</h2>
            {categoryStore.categories.map(category => {
                return <CategoryItem key={category.id} category={category}/>;
            })}
        </>
    );
});


export default CategoryList;