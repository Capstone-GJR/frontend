import React from 'react';

function PageNameHeader(props){
    return (
        <div className="w-100">
            <h1 className="text-white m-auto">{props.pageName}</h1>
        </div>
    )
}

export default PageNameHeader