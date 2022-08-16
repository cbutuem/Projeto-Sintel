import {Dados} from "../Dados"
import React, { useState, useEffect } from 'react';

export function Numero(){
        const [message, setMessage] = useState('Hi there, how are you?');
      
        useEffect(() => {
          console.log('trigger use effect hook');
      
          setTimeout(() => {
            setMessage("I'm fine, thanks for asking.");
          }, 1000)
        })
      
        return (
            <>
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
            </>
        );
      
}