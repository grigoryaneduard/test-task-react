import {action, makeObservable, observable} from "mobx";

export interface ICategory {
    id: number;
    name: string;
}

export class CategoryStore {
    public categories: ICategory[] = [
        {id: 1, name: "category 1"},
        {id: 2, name: "category 2"},
        {id: 3, name: "category 3"},
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
