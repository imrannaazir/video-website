import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideos } from './videosAPI';

const initialState = {
    isLoading: false,
    videos: [],
    isError: false,
    error: ""
};

export const fetchVideos = createAsyncThunk(
    'videos/fetchVideos',
    async ({ filteredTags, searchedTerm }) => {
        console.log(searchedTerm);
        const videos = await getVideos(filteredTags, searchedTerm);
        return videos;
    }
);

export const videosSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state, action) => {
                state.isLoading = true;
                state.videos = [];
            })

            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })

            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error?.message
            })
    }
});


export default videosSlice.reducer;
