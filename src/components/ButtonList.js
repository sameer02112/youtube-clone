import React from 'react';
import Button from './Button';

const ButtonList = () => {
    const buttonList = ['All','Live','Games','Moves','Series','Cooking','Files','Videos','Liked','Fashion', 'Whats new']
    return (
        <div className="flex">
            {buttonList.map(el => <Button name={el}/>)}
            
        </div>
    )
}

export default ButtonList
