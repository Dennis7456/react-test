import React,{ useState } from "react";
import TestHook from "./components/test-hook/TestHook";

const HookApp = () => {
    const [state, setState] = useState('Some Text');
    const [name, setName] = useState('Moe');

    const changeName = () => {
        setName('Steve');
    }

    return(
        <div className="HookApp">
            <h1>Basic useState Hook</h1>
            <TestHook name={name} changeName={changeName} />
        </div>
    )
}

export default HookApp;