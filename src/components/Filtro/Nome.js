import {Dados} from "../Dados"
import React, { useState, useEffect } from 'react';
import { Tabela } from "../Tabela";
import Popup from "../Popup";
import ContentPop from "./ContentPop";
import Data from "./Data";
import { Numero } from "./Numero";

export function Nome(){
 
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
                            <th class= "but"><Numero/></th>
                            <th>ID</th>
                            <th></th>
                            <th></th>
                        </tr> 
                </thead>
        </>
    );
}