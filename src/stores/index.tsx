import { createContext } from "react";
import { CategoryStore } from "./CategoryStore";
import { GalleryStore } from "./GalleryStore";

export const rootStoreContext = createContext({
    categoryStore: new CategoryStore(),
    galleryStore: new GalleryStore(),
});

