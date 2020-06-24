import React from 'react';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus} from "@fortawesome/free-solid-svg-icons";

class Plus extends React.Component{
    render(){
        //const f=require('react-fontawesome');
        if(this.props.type===1){
        return(
                <div className="equalPlus">
                   <FontAwesomeIcon icon={faPlus} />
                </div>
        );
        }
        else{
            return(
                <div className="equalPlus">
                <FontAwesomeIcon icon={faMinus} />
             </div>
            );
        }
    }
}
export default Plus;