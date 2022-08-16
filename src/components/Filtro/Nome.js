import {Dados} from "../Dados"
import React, { useState, useEffect } from 'react';
import { Tabela } from "../Tabela";
import Popup from "../Popup";
import ContentPop from "./ContentPop";

export function Nome(props){
    const [isOpen, setIsOpen] = useState(false);
    const [rock, setRock] = useState();
   
    function togglePopup(){
        setIsOpen(!isOpen);
    }
    
    let only = [];
    
    console.log(props.name, "hello");

    const status = Dados.map(inf => inf.status);

    console.log(status, "marcioo");

    if (props.name == "status"){
        for(let i = 0; i < status.length; i++)
        {
              if (i > status.indexOf(status[i]))
               {
                  continue;
               }
                only.push(status[i]);            
        }
};
    
    const sender = Dados.map(inf => inf.sender);
if (props.top == "sender"){
    for(let i = 0; i < sender.length; i++)
    {
          if (i > sender.indexOf(sender[i]))
           {
              continue;
           }
          only.push(sender[i]);       
    }
};    

    const receiver= Dados.map(inf => inf.receiver);
if (props.clock == "receiver"){    
    for(let i = 0; i < receiver.length; i++)
    {
          if (i > receiver.indexOf(receiver[i]))
           {
              continue;
           }
          only.push(receiver[i]);       
    }
};    
    const listOnly = only.map((only)=>
    <li><input type="checkbox"/>{only}</li>
);
const huui= "";
console.log(rock, "ops");
console.log(only, "HELL");
  
    return(
        <>
            <thead>
                        <tr>
                            <th><input type="checkbox"></input></th>
                            <th class= "but"><ContentPop cat ={Dados.map(inf => inf.status)} name="Status"/></th>
                            <th class= "but"><ContentPop cat ={Dados.map(inf => inf.sender)} name="Sender"/></th>
                            <th class= "but"><ContentPop cat ={Dados.map(inf => inf.receiver)} name="Receiver"/></th> 
                            <th>Document</th>
                            <th>Content</th>
                            <th>Size(KB)</th>
                            <th>Connection</th>
                            <th>Date</th>
                            <th>ID</th>
                            <th></th>
                            <th></th>
                        </tr> 
                </thead>
        </>
    );
}