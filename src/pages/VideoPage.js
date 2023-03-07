import React from 'react'
import RelatedVideos from '../components/RelatedVideos/RelatedVideos'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'

export default function VideoPage() {
    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <VideoPlayer />

                    {/* <!-- related videos --> */}
                    <RelatedVideos />
                </div>
            </div>
        </section>
    )
}
