import {observer} from "mobx-react";
import {ICategory} from "../../stores/CategoryStore";

type OnSelect = (a: string) => void;

interface IProps {
    category: ICategory;
    onSelect: OnSelect;
}

const CategoryItem = observer(({category, onSelect}: IProps) => {
    return (<p onClick={() => onSelect(category.id.toString())}>{category.name.toUpperCase()}</p>);
});


export default CategoryItem;