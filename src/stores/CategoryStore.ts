import {action, makeObservable, observable} from "mobx";

export interface ICategory {
    id: number;
    name: string;
}

export class CategoryStore {
    public categories: ICategory[] = [
        {id: 1, name: "boxes"},
        {id: 2, name: "clothes"},
        {id: 3, name: "hats"},
        {id: 4, name: "sinks"},
        {id: 5, name: "space"},
        {id: 6, name: "sunglasses"},
        {id: 7, name: "ties"},
    ];

    public addCat = (category: ICategory) => {
        this.categories.push(category);
    };

    constructor() {
        makeObservable(this, {
            categories: observable,
            addCat: action,
        })
    }
}
