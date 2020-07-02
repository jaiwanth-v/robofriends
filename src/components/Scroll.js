import React from 'react';

const Scroll = (props) =>{
    return (
        <div style = {{overflowY: 'auto', border: '0px solid black', height: '750px'}}>
            {props.children}
        </div>
    )
};

export default Scroll; 