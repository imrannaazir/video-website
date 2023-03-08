import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";

//initial state 
const initialState = {
    isLoading: false,
    videos: [],
    isError: false,
    error: ""
};

// async thunk function
export const fetchRelatedVideos = createAsyncThunk("relatedVideos/fetchRelatedVideos", async ({ viewedId, tags }) => {
    const videos = await getRelatedVideos({ viewedId, tags })
    return videos;
})

// related video slice 
const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideos.pending, (state, action) => {
                state.isLoading = true;
                state.videos = {};
            })

            .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })

            .addCase(fetchRelatedVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = {};
                state.isError = true;
                state.error = action.error?.message;
            })
    }
});

export default relatedVideosSlice.reducer;