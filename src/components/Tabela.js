import React, { useState } from 'react';
import { Dados } from "./Dados";
import Popup from "./Popup";
import { Nome } from "./Filtro/Nome";

export function Tabela(props){
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  let only = [];
    
  const words = Dados.map(inf => inf.status);

  const fil = Dados.filter(op => op.status == "Delivered");
  console.log(fil, "huia");
console.log(words); 
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
console.log(listOnly,"LISTAAA");
    return(
        <>
            <table class= "fixed_header">
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
                <tbody>    
                {Dados.map((info) => {
                    return(
                        <>
                             
                                <tr>
                                    <td><input type="checkbox"></input></td>
                                    <td>{info.status}</td>
                                    <td>{info.sender}</td>
                                    <td>{info.receiver}</td>
                                    <td>{info.document}</td>
                                    <td>{info.content}</td>
                                    <td>{info.size}</td>
                                    <td>{info.connection}</td>
                                    <td>{info.data}</td>
                                    <td>{info.ID}</td>
                                    <td>{info.downloadFile}</td>
                                    <td>{info.viewDetails}</td>          
                                </tr>
                            
                        </>      
                      )
                    })}
                </tbody> 
            </table>  
        </>
    );

};