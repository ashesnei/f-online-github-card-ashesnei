import React from 'react';

class Card extends React.Component {
render(){
return (
    <div className="card">
        <div className="img-member__container"><img src="" alt=""/></div>
        <div className="data-member__container">
            <span>miembro</span>
            <p>Nombre de miembro</p>
        </div>
    </div>
 );
 }
}

export default Card;