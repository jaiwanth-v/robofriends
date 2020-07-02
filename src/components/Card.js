import React from 'react';

const Card = (props) =>{
    const {name, email, id} = props;
    return(
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 '>
             <img alt='robot' src= {`https://robohash.org/${id}?size=200x200`} />
             <div>
                 <h2 className='f4'>{name.slice(0,20)}</h2>
                 <p className = 'f6'>{email}</p>
             </div>
        </div>
    );
}

export default Card;