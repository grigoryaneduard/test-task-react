import {observer} from "mobx-react";
import {ICat} from "../../stores/CatStore";

interface IProps {
    cat: ICat;
}

const CatItem = observer(({cat}: IProps) => {
    return (<h5>{cat.name}</h5>);
});


export default CatItem;