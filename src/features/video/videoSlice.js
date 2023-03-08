import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

// initial State 
const initialState = {
    isLoading: false,
    video: {},
    isError: false,
    error: ""
};

// async thunk function
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (videoId) => {
    const video = await getVideo(videoId)
    return video;
})

//video slice 
const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state, action) => {
                state.isLoading = true;
                state.video = {};
            })

            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })

            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            })
    }
});

export default videoSlice.reducer;
