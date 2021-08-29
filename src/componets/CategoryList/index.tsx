import {useEffect} from "react";
import {observer} from "mobx-react";
import CategoryItem from "../CategoryItem";
import {useStores} from "../../use-stores";

const CategoryList = observer(() => {
    const {categoryStore} = useStores();

    useEffect(() => {
        categoryStore.fetch();
    }, [categoryStore]);

    return (
        <>
            <h2>Categories</h2>
            {categoryStore.data.length === 0 && <p>No Category</p>}
            {categoryStore.data.map(category => {
                return <CategoryItem key={category.id} category={category}/>;
            })}
        </>
    );
});


export default CategoryList;