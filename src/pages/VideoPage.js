import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos/RelatedVideos'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import { fetchVideo } from '../features/video/videoSlice';

export default function VideoPage() {
    const { videoId } = useParams()
    const dispatch = useDispatch();
    const { isLoading, video, isError, error } = useSelector(state => state.video);
    console.log(video);
    // dispatch fetched video action 
    useEffect(() => {
        dispatch(fetchVideo(videoId))
    }, [dispatch, videoId])
    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <VideoPlayer />
                    <RelatedVideos />
                </div>
            </div>
        </section>
    )
}
