import axiosInstance from "../../utils/axios"

export const getVideos = async (filteredTags, searchedTerm) => {
    console.log(searchedTerm);
    // console.log(searchTerm);
    let queryString = ""
    if (filteredTags?.length > 0) {
        queryString = filteredTags.map(tag => `tags_like=${tag}`).join("&");
    }
    if (searchedTerm !== "") {
        queryString += `&q=${searchedTerm}`
    }
    console.log(queryString);
    const response = await axiosInstance.get(`/videos?${queryString}`);
    return response.data;
}