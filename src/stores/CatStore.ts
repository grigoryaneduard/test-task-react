import {action, makeObservable, observable} from "mobx";

export interface ICat {
    id: number;
    name: string;
    src: string;
}

export class CatStore {
    public cats: ICat[] = [
        {id: 1, name: "cut 1", src: 'https://cdn2.thecatapi.com/images/dn.jpg'},
        {id: 2, name: "cut 2", src: 'https://cdn2.thecatapi.com/images/es.jpg'},
        {id: 4, name: "cut 3", src: 'https://cdn2.thecatapi.com/images/fj.jpg'},
        {id: 5, name: "cut 4", src: 'https://cdn2.thecatapi.com/images/g8.jpg'},
        {id: 6, name: "cut 5", src: 'https://cdn2.thecatapi.com/images/h5.jpg'},
        {id: 7, name: "cut 6", src: 'https://cdn2.thecatapi.com/images/h6.jpg'},
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
