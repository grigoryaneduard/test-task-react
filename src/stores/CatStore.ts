import {action, makeObservable, observable} from "mobx";

export interface ICat {
    id: number;
    name: string;
    src: string;
}

export class CatStore {
    public cats: ICat[] = [
        {id: 1, name: "cut 1", src: ''},
        {id: 2, name: "cut 2", src: ''},
        {id: 4, name: "cut 3", src: ''},
        {id: 5, name: "cut 4", src: ''},
        {id: 6, name: "cut 5", src: ''},
        {id: 7, name: "cut 6", src: ''},
    ];

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
