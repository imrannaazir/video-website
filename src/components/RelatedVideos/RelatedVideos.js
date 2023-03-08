import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Error from '../../ui/Error';
import Loading from '../../ui/Loading';
import SingleRelatedVideo from './SingleRelatedVideo'

export default function RelatedVideos({ viewedId, tags }) {
    const dispatch = useDispatch();
    const { isLoading, videos, isError, error } = useSelector(state => state.relatedVideos);

    //dispatch fetched related videos
    useEffect(() => {
        dispatch(fetchRelatedVideos({ viewedId, tags }))
    }, [dispatch, tags, viewedId]);

    // decide what to render in ui
    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && videos.length > 0) content = videos.map(video => <SingleRelatedVideo video={video} key={video?.id} />);
    if (!isLoading && !isError && videos?.length === 0) content = <Error>No related video found!</Error>;
    if (isError) content = <Error>{error}</Error>;

    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {content}
        </div>
    )
}
