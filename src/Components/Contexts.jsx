import React, { createContext } from 'react'
import { getUserData } from './Functions'

export const userContexts = createContext(getUserData())