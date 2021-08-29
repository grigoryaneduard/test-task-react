import {action, flow, makeObservable, observable} from "mobx";
import CategoryService from "../services/Category";

export interface ICategory {
    id: number;
    name: string;
}

export class CategoryStore {
    private categoryService: CategoryService;
    public data: ICategory[] = [];

    public addData = (category: ICategory) => {
        this.data.push(category);
    };

    *fetch() {
        const params = {};
        const urlParams = new URLSearchParams(Object.entries(params));
        this.data = yield this.categoryService.get(urlParams);
    }

    constructor() {
        makeObservable(this, {
            data: observable,
            addData: action,
            fetch: flow
        });

        this.categoryService = new CategoryService();
    }
}
