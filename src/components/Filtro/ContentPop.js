import Popup from "../Popup";
import React, { useState } from 'react';

function ContentPop(props){
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
    setIsOpen(!isOpen);}
    
    const status = props.cat;
    let only = [];

    console.log(props.status, "vai Carai");

    for(let i = 0; i < status.length; i++)
    {
          if (i > status.indexOf(status[i]))
           {
              continue;
           }
            only.push(status[i]);            
    }
    const listOnly = only.map((only)=>
    <li><input type="checkbox"/>{only}</li>)
    console.log(only, "cry");
    return(
        <>
            <div>
                <spam onClick={togglePopup}>{props.name}</spam>
                {isOpen && <Popup content={
                    <>  
                        <div>
                            <ul>{listOnly}</ul>
                        </div>
                    </>}
                    handleClose={togglePopup}
                />}
            </div>
        </>
    );
}
export default ContentPop;