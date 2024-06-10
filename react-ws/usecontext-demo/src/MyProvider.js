import {createContext,useState} from 'react';
//Create context with default data

const MyContext =createContext('Default Data');
const MyContext1 =createContext('Context1 data');


export  {MyContext,MyContext1};