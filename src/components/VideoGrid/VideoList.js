import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../ui/Loading';
import { fetchVideos } from '../../features/videos/videosSlice';
import VideoItem from './VideoItem'
import Error from '../../ui/Error';

export default function VideoList() {
    const dispatch = useDispatch();
    const { isLoading, videos, isError, error } = useSelector(state => state.videos);

    useEffect(() => {
        dispatch(fetchVideos())
    }, [dispatch])

    //what to render in ui
    let content;
    if (isLoading) content = <Loading />;
    if (!isLoading && videos.length > 0) content = videos.map(video => <VideoItem video={video} key={video.id} />);
    if (!isLoading && videos.length === 0) content = <Error>No video found!</Error>;
    if (isError) content = <Error>{error}</Error>;
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {content}
                </div>
            </section>
        </section>
    )
}
