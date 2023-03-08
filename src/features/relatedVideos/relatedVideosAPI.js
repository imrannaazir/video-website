import axiosInstance from "../../utils/axios";

export const getRelatedVideos = async ({ viewedId, tags }) => {
    let queryString = "tags_like=react"
    queryString = tags.map(tag => `tags_like=${tag}`).join("&") + `&id_ne=${viewedId}`;
    const response = await axiosInstance.get(`videos?${queryString}`);
    return response.data;
};