import {Dados} from "../Dados"
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Numero.module.css';
import Data from "./Data";
export function Numero(props){
        return (
            <>
                <nav className={styles.nav}>

                  <label for={styles.touch} className={styles.label}><div className={styles.span}>Data</div></label>               
                  <input type="checkbox" id={styles.touch}/>

                    <div className={styles.slide} >
                       <span><Data/></span>
                    </div>

                </nav>  
            </>
        );
      
}