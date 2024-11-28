import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState('');
    const [recentProompt, setRecentPrompt] = useState('');
    const [prevPrmopts, setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);;
    const [loading,setLoading] = useState(false);
    const [resultData, setResultData] = useState('');
    const onSent = async (input) => {
        setResultData('');
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input)
        const response = await runChat(input);
        setResultData(response);
        setInput('')
    }
    const contextValue = {
        prevPrmopts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentProompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;