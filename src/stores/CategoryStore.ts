import {action, makeObservable, observable} from "mobx";

export interface ICategory {
    id: number;
    name: string;
}

export class CategoryStore {
    public categories: ICategory[] = [];

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
