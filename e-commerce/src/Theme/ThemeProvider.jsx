import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext=createContext()

const ThemeProvider = ({children}) => {
     const[theme,setTheme]=useState('light')

     function toggleTheme(){
        setTheme(prev => prev == 'light' ? 'dark' :'light')
     }
 
    return (
   <ThemeContext value={{theme,toggleTheme}}>{children}</ThemeContext>
  )
}

export default ThemeProvider