import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import searchImage from "../../assets/search.svg";
import { getSearchTerm } from "../../features/filters/filtersSlice";

export default function Search() {
    const match = useMatch("/")
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [input, setInput] = useState("")
    // handle search filter 
    const handleSearchFilter = (e) => {
        e.preventDefault();
        dispatch(getSearchTerm(input))
        // if user is not in home page, redirect to home page
        if (!match) {
            navigate("/");
        }
    }
    return (
        <div
            className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <form onSubmit={handleSearchFilter}>
                <input
                    onChange={(e) => setInput(e?.target?.value)}
                    value={input}
                    className="outline-none border-none mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                />
                <img
                    className="inline h-4 cursor-pointer"
                    src={searchImage}
                    alt="Search"
                />
            </form>
        </div>
    )
}
