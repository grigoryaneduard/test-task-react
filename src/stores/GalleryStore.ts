import {action, makeObservable, observable} from "mobx";

export interface IGallery {
    id: number;
    name: string;
    src: string;
}

export class GalleryStore {
    public data: IGallery[] = [];

    public addData = (gallery: IGallery) => {
        this.data.push(gallery);
    };

    constructor() {
        makeObservable(this, {
            data: observable,
            addData: action,
        })
    }
}
