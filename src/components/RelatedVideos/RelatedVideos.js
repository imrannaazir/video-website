import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import SingleRelatedVideo from './SingleRelatedVideo'

export default function RelatedVideos({ viewedId, tags }) {
    const dispatch = useDispatch();
    //dispatch fetched related videos
    useEffect(() => {
        dispatch(fetchRelatedVideos({ viewedId, tags }))
    }, [dispatch, tags, viewedId])
    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            <SingleRelatedVideo />
        </div>
    )
}
