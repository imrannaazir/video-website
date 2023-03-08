import React from 'react'
import Player from './Player'
import VideoDescription from './VideoDescription'

export default function VideoPlayer({ video }) {
    return (
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <Player link={video?.link} title={video?.title} />
            <VideoDescription video={video} />
        </div>
    )
}
