import {Dados} from "../Dados"
import React, { useState, useEffect } from 'react';
import { Tabela } from "../Tabela";
import Popup from "../Popup";

export function Nome(props){
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
    setIsOpen(!isOpen);
  }
    let only = [];
    const [word, setWord] = useState("");
    const [prent, setPrent] = useState(props.name);

    const words = Dados.map(inf => inf.status);

    console.log(props.name, "leite");

    for(let i = 0; i < words.length; i++)
    {
      if (i > words.indexOf(words[i]))
       {
          continue;
       }
      only.push(words[i]);
    }
    console.log(only, "whyyy");
  
  const listOnly = only.map((only)=>
  <li><input type="checkbox"/>{only}</li>
  );
    return(
        <>
            <thead>
                        <tr>
                            <th><input type="checkbox"></input></th>
                            <th onClick={togglePopup} type="button" setNomo="status" class= "but">Status</th>
                            <th onClick={togglePopup} setNomo="sender" class= "but">Sender</th>
                            <th onClick={togglePopup} setNomo="receiver" class= "but">Receiver</th> 
                            <th>Document</th>
                            <th>Content</th>
                            <th>Size(KB)</th>
                            <th>Connection</th>
                            <th>Date</th>
                            <th>ID</th>
                            <th></th>
                            <th></th>
                            {isOpen && <Popup content={
                                    <>  
                                       <div>
                                            <ul>{listOnly}</ul>
                                        </div>
                                    </>}
                                        handleClose={togglePopup}
                                />}
                        </tr> 
                </thead>
        </>
    );
}