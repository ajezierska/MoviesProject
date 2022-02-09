import React, { useRef } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { sortValueState, dataSortState, searchState } from "../atoms";

export const Sort = () => {
    const [sortValue, setSortValue] = useRecoilState(sortValueState)
    const [, setDataSort] = useRecoilState(dataSortState)
    const sortEl = useRef('')
    const resetSearchValue = useResetRecoilState(searchState);
    const sortOptions = [
        {name: 'release_date.asc', value: 'Release date - ascending' }, 
        {name: 'release_date.desc', value: 'Release date - descending' }, 
        {name: 'popularity.asc', value: 'Popularity - ascending' }, 
        {name: 'popularity.desc', value: 'Popularity - descending' }, 
        {name: 'vote_average.asc', value: 'Voting - ascending' }, 
        {name: 'vote_average.desc', value: 'Voting - descending' }, 
    ]

    const handleFilterSort = () => {
        setSortValue(sortEl.current.value)
        const sortData = sortOptions.find((el) => el.value === sortEl.current.value).name
        setDataSort(sortData);
        resetSearchValue()
    }

    return (
        <>
        <div>
           Sort by:
           <select value={sortValue} onChange={(e) => handleFilterSort(e)} ref={sortEl}>
                <option value="all">most relevant</option>
                {sortOptions.map((data) => (
                <option value={data.value} key={data.name}>
                    {data.value}
                </option>
                ))}
            </select>

        </div>
        </>
    )
}
