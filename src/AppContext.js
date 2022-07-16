import React, { useState } from "react";
import TestHookContext from "./components/react-testing-lib/context/TestHookContext";

import Context from "./components/store/context";
import HooksForm1 from "./components/react-testing-lib/context/hooksform/HooksForm1";
import TestAxios from "./components/react-testing-lib/testaxios/TestAxios"

const AppContext = () => {
    const [state, setState] = useState('Some Text')

    const changeText = () => {
        setState('Some Other Text')
    }

    return (
        <div className="App">
            <h1>Basic Hook UseContext</h1>
            <Context.Provider value={{ changeTextProp: changeText, stateProp: state }}>
                <TestHookContext />
            </Context.Provider>
            <HooksForm1 />
            {/* <TestAxios url="https://jsonplaceholder.typicode.com/posts/1" /> */}
        </div>
    );
}

export default AppContext;