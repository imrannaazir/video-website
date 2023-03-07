import React from 'react'
import Tags from '../components/Tags/Tags'
import VideoList from '../components/VideoGrid/VideoList'
import Pagination from '../ui/Pagination'

export default function Home() {
    return (
        <>
            <Tags />
            <VideoList />
            <Pagination />
        </>
    )
}
