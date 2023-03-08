import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../../features/filters/filtersSlice';

export default function Tag({ tag: { title } }) {
    const dispatch = useDispatch()
    const { tags: selectedTags } = useSelector(state => state.filters)
    const isSelected = selectedTags.includes(title);

    // handle set selected
    const handleSetSelected = () => {
        if (isSelected) {
            dispatch(tagRemoved(title));
        } else {
            dispatch(tagSelected(title))
        };
    };
    return (
        <div onClick={handleSetSelected}
            className={`${isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"} px-4 py-1 rounded-full cursor-pointer`}
        >
            {title}
        </div>

    )
}
