const webApiUrl = "https://api.thecatapi.com/v1/images/search";

export default class GalleryService {
    get = async (urlParams: any) => {
        const options = {
            method: "GET",
        }
        const request = new Request(webApiUrl + "?" + urlParams, options);
        const response = await fetch(request);
        return response.json();
    }
}