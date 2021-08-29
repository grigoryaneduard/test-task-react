const webApiUrl = "https://api.thecatapi.com/v1/categories";

export default class CategoryService {
    get = async (urlParams: any) => {
        const options = {
            method: "GET"
        }
        const request = new Request(webApiUrl + "?" + urlParams, options);
        const response = await fetch(request);
        return response.json();
    }
}