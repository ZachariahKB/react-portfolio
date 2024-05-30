import React from "react";


function Footer(){
    const icons = [ 
        {
        name: "zachariahKB",
        links: "https://github.com/"
    },
    {
        name: "zachariahKB",
        links: "https://github.com/"
    }
    ]
    return (
        <footer>
            {icons.map(icon => {
                return <a href={icon.link} key={icon.name} target="_blank"><i className={icon.name}></i></a>
            }
            )}
        </footer>
    )
        
}

export default  Footer; 