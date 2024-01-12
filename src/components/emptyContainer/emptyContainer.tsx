import React from 'react';
import './emptyContainer.scss'
import Search from "../../ui-elements/inputfields/searchInputs/search"
import empty from '../../assets/sounds/empty.mp4'

type EmptyContainerProps = {
    text: string
};

const EmptyContainer:React.FC<EmptyContainerProps> = ({text}) => {
    
    return (
        <div className="empty-container">
          <video className="emptyVideo" src={empty} muted loop autoPlay></video>
          <Search text={text}/>
        </div>
    )
}
export default EmptyContainer;