import React from 'react';

function PageNameHeader(props){
    return (
        <div className="w-100">
            <h2 className="text-white m-auto">{props.pageName}</h2>
        </div>
    )
}

export default PageNameHeader