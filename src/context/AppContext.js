import { createContext, useState } from "react";

export const AppContext=createContext();

function AppContextProvider({children}){
const[name ,setName]=useState("yash");
const[searchval,setSearchval]=useState('');
const [author, setAuthor] = useState('yasglog')

const [searchtrue,setSearchtrue]=useState('');
const[theme,setTheme]=useState("white")

const value={
    name,
    searchval,
    author,
    searchtrue,
    theme,
    setName,
    setSearchval,
    setAuthor,
    setSearchtrue,
    setTheme
}

return <AppContext.Provider value={value}>

    {children}
</AppContext.Provider>
}


export default AppContextProvider;