import {observer} from "mobx-react";
import {ICategory} from "../../stores/CategoryStore";

interface IProps {
    category: ICategory;
}

const CategoryItem = observer(({category}: IProps) => {
    return (
        <p>{category.name.toUpperCase()}</p>
    );
});


export default CategoryItem;