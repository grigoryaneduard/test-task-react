import {action, flow, makeObservable, observable} from "mobx";
import CategoryService from "../services/Category";

export interface ICategory {
    id: number;
    name: string;
}

export class CategoryStore {
    private categoryService: CategoryService;
    public categories: ICategory[] = [];

    public addCat = (category: ICategory) => {
        this.categories.push(category);
    };

    *fetch() {
        const params = {};
        const urlParams = new URLSearchParams(Object.entries(params));
        this.categories = yield this.categoryService.get(urlParams);
    }

    constructor() {
        makeObservable(this, {
            categories: observable,
            addCat: action,
            fetch: flow
        });

        this.categoryService = new CategoryService();
    }
}
