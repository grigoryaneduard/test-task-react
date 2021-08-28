import { createContext } from "react";
import { CategoryStore } from "./CategoryStore";
import { CatStore } from "./CatStore";

export const rootStoreContext = createContext({
    categoryStore: new CategoryStore(),
    catStore: new CatStore(),
});

