import React from "react";
import { ReactDOM } from "react-dom";
import TestHook from "./TestHook";
import { render, fireEvent, cleanup } from "@testing-library/react"
import HookApp from "../../HookApp";

it('text in state is changed when button is clicked', () => {
    const { getByText } = render(<TestHook />);

    expect(getByText(/Initial/i).textContent).toBe("Initial State")
    fireEvent.click(getByText('State Change Button'));
    expect(getByText(/Initial/i).textContent).toBe("Initial State Changed");
})

it('button click changes props', () => {
    const { getByText } = render(<HookApp>
        <TestHook />
        </HookApp>);
    
    expect(getByText(/Moe/i).textContent).toBe('Moe');
    fireEvent.click(getByText('Change Name'));
    expect(getByText(/Steve/i).textContent).toBe('Steve');

})