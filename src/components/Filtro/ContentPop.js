import Popup from "../Popup";
import React, { useState } from 'react';

function ContentPop(props){
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);}

    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };

      const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";
        const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
    
    const status = props.cat;
    let only = [];

    for(let i = 0; i < status.length; i++)
    {
          if (i > status.indexOf(status[i]))
           {
              continue;
           }
            only.push(status[i]);            
    }
    const listOnly = only.map((item, index)=>
    <span key={index}>
    <li><input type="checkbox" value={item} onChange={handleCheck} />
    <span className={isChecked(item)}>{item}</span>
    </li>
    </span>)
    console.log(listOnly, "cry");
    return(
        <>
            <div>
                <spam onClick={togglePopup}>{props.name}</spam>
                {isOpen && <Popup content={
                    <>  
                        <div>
                            <ul>{listOnly}</ul>
                            {`Items checked are: ${checkedItems}`}
                            {console.log(checkedItems, "BIACH")}
                        </div>
                    </>}
                    handleClose={togglePopup}
                />}
            </div>
        </>
    );
}
export default ContentPop;