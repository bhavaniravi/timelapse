import React from 'react';
import {faEquals} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class Equal extends React.Component{
    render(){
        return(
                <div className="equalPlus">
                    <FontAwesomeIcon icon={faEquals} />
                </div>
        );
    }
}
export default Equal;