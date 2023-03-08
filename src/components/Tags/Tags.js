import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from '../../features/tags/tagsSlice';
import Loading from '../../ui/Loading';
import Tag from './Tag'

export default function Tags() {
    const dispatch = useDispatch();
    const { tags, isLoading, isError } = useSelector(state => state.tags);

    // dispatch fetched action
    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])

    //decide what to render in ui
    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && tags.length > 0) content = tags.map(tag => <Tag tag={tag} key={tag.id} />)
    if (isError) content = null;
    return (
        <section>
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >
                {content}
            </div>
        </section>
    )
}
