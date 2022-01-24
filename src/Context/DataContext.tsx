import { createContext,ReactNode,useContext,useState } from "react";
import {dataGoals} from '../data/goals'

type DataGoals = {}
type DataContextProps = {
  data:DataGoals
}
type  DataProviderPops={
 children:ReactNode
}
export const DataContext = createContext({} as DataContextProps)

function DataProvider({children}:DataProviderPops){
  const [data,setData]= useState<DataGoals>(dataGoals)
  return(
    <DataContext.Provider  value={{data}}>
      {children}
    </DataContext.Provider>
  )
}
function MyContext(){
  const context = useContext(DataContext)
  return context
}

export {DataProvider,MyContext}