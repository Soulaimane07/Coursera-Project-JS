import { createContext } from 'react'
import { GetLang, getUserData } from './Functions'

export const userContexts = createContext(getUserData())
export const langContexts = createContext(GetLang("Arabic"))