import React from 'react'

// export const Header = ({name}) => {
//     return (
//         <div style={{background:"yellow",padding:20}}>
//             <h1>Header </h1>
//             <h1>{name}</h1>
//             <p>This is header component for heading purpose</p>
//         </div>
//     )
// }


// export const Header = (props) => {
//     return (
//         <div style={{background:"pink",padding:20}}>
//             <h1>Header</h1>
//             <h1>{props.name}</h1>
//             <p>This is header component</p>
//         </div>
//     )
// }

export const Header = ({name,title}) => {
    return (
        <div style={{background:"lightgreen",padding:50}} >
            <h1>{name}</h1>
            <h1>{title} </h1>
            <p>This is compoenent header</p>
        </div>
    )
}


