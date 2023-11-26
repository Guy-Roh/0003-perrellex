//Innertext has the Type '{ children: (string | Element)[]; id: string; text: string; }'

import React from 'react'


const InnerText = ({text, id, className}:{text:string, id:string, className:string}) => {
    return (
        <p id={id} className={className} dangerouslySetInnerHTML={{__html: text}}></p>
    )
}

export default InnerText
