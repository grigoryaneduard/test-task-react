import {action, makeObservable, observable} from "mobx";

export interface ICat {
    id: number;
    name: string;
    src: string;
}

export class CatStore {
    public cats: ICat[] = [];

    public addCat = (cat: ICat) => {
        this.cats.push(cat);
    };

    constructor() {
        makeObservable(this, {
            cats: observable,
            addCat: action,
        })
    }
}
