const webApiUrl = "https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=5";

export default class CatService {
    get = async (urlParams: any) => {
        const options = {
            method: "GET",
        }
        const request = new Request(webApiUrl + "?" + urlParams, options);
        const response = await fetch(request);
        return response.json();
    }
}