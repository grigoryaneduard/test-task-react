import {action, flow, makeObservable, observable} from "mobx";
import GalleryService from "../services/Gallery";
import {ICategory} from "./CategoryStore";

export interface IGallery {
    id: number,
    name: string,
    breeds: [];
    categories: ICategory[];
    url: string;
    height: number,
    width: number;
}

export class GalleryStore {
    private galleryService: GalleryService;
    public data: IGallery[] = [];

    public addData = (gallery: IGallery) => {
        this.data.push(gallery);
    };

    * fetch(): any {
        const params = {};
        const urlParams = new URLSearchParams(Object.entries(params));
        this.data = yield this.galleryService.get(urlParams);
    }

    * fetchByCategoryId(id: string): any {
        const params = {
            limit: '10',
            page: '1',
            category_ids: id,
        };
        const urlParams = new URLSearchParams(Object.entries(params));
        this.data = yield this.galleryService.get(urlParams);
    }

    constructor() {
        makeObservable(this, {
            data: observable,
            addData: action,
            fetchByCategoryId: flow,
            fetch: flow,
        });

        this.galleryService = new GalleryService();
    }
}
