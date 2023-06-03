import { MyContextProps } from '@/types';
import React from 'react';



const MyContext = React.createContext<MyContextProps | undefined>(undefined);

export default MyContext;
