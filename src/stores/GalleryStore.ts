import {action, flow, makeObservable, observable} from "mobx";
import GalleryService from "../services/Gallery";
import {ICategory} from "./CategoryStore";
import assert from "assert";

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
    private page = 1;
    private limit = 10;
    public categoryId: string | undefined;

    public addData = (gallery: IGallery) => {
        this.data.push(gallery);
    };

    * fetch(): any {
        this.page = 1;
        const params = {};
        const urlParams = new URLSearchParams(Object.entries(params));
        this.data = yield this.galleryService.get(urlParams);
    }

    * fetchByCategoryId(cId: string): any {
        assert(cId !== undefined, 'Please enter valid category id');
        assert(cId !== null, 'Please enter valid category id');
        assert(cId !== '', 'Please enter valid category id');
        const params = {limit: this.limit.toString(), page: this.page.toString(), category_ids: cId};
        const urlParams = new URLSearchParams(Object.entries(params));
        this.data = yield this.galleryService.get(urlParams);
        this.categoryId = cId;
    }

    * loadMore(): any {
        this.page += 1;
        const params = {limit: this.limit.toString(), page: this.page.toString(), category_ids: this.categoryId!};
        const urlParams = new URLSearchParams(Object.entries(params));
        this.data = [...this.data, ...yield this.galleryService.get(urlParams)];
    }

    constructor() {
        makeObservable(this, {
            data: observable,
            addData: action,
            fetchByCategoryId: flow,
            loadMore: flow,
            fetch: flow,
        });

        this.galleryService = new GalleryService();
    }
}
