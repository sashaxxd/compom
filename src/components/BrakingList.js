import React from 'react'


const BreakingList = props =>(
    <>
        {props.breakingLists.map((list, index) => {
                return(
        <li className="firstmain" key={index}  onClick={() => props.onModelClick(list.id)}>
            <a href="/"
                                     target="_self">{list.name}</a>
        </li>
        )
        }
        )}
    </>
)

export default BreakingList