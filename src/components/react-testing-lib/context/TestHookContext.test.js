import React from "react";
import ReactDOM from "react-dom";
import TestHookContext from "../../react-testing-lib/context/TestHookContext";
import { act, render, fireEvent, cleanup } from '@testing-library/react';
import App from '../../../AppContext';

import Context from "../../store/context";
import AppContext from "../../../AppContext";

afterEach(cleanup);

it('Context value is updated by child component', () => {
    const { container, getByText } = render(
        <AppContext>
            <Context.Provider>
                <TestHookContext />
            </Context.Provider>
        </AppContext>
    );

    expect(getByText(/Some/i).textContent).toBe('Some Text');

    fireEvent.click(getByText('Change Text'));

    expect(getByText(/Some/i).textContent).toBe('Some Other Text');
});