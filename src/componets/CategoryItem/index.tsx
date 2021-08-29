import {observer} from "mobx-react";
import {ICategory} from "../../stores/CategoryStore";
import './index.scss';

type OnSelect = (a: number) => void;

interface IProps {
    category: ICategory;
    onSelect: OnSelect;
    isSelected: boolean
}

const CategoryItem = observer(({category, onSelect, isSelected}: IProps) => {
    return (<p className={isSelected ? 'selected' : ''}
               onClick={() => onSelect(category.id)}>{category.name.toUpperCase()}</p>);
});


export default CategoryItem;