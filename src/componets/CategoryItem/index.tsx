import {observer} from "mobx-react";
import {ICategory} from "../../stores/CategoryStore";

interface IProps {
    category: ICategory;
}

const CategoryItem = observer(({category}: IProps) => {
    return (
        <h5>{category.name}</h5>
    );
});


export default CategoryItem;