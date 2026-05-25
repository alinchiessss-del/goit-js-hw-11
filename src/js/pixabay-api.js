import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

const API_KEY = "55935426-09f449c6311981838f06ace57";
export function getImagesByQuery(query) {
  return axios
    .get("", {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then(response => response.data.hits);
}