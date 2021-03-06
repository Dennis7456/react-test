import React from "react";
import { ReactDOM } from "react-dom";
import TestHookReducer from "./TestHookReducer";
import * as Reducer from '../store/reducer';
import * as ACTIONS from '../store/actions';
import { fireEvent, render } from "@testing-library/react";

describe('test the reducer and actions', () => {
    it('should return the initial state', () => {
        expect(Reducer.initialState).toEqual({ stateprop1: false});
    });

    it('should change stateprop1 from false to true', () => {
        expect(Reducer.Reducer1(Reducer.initialState, ACTIONS.SUCCESS))
        .toEqual({ stateprop1: true });
    });

    it('Reducer changes stateprop1 from false to true', () => {
        const { container, getByText } = render(<TestHookReducer />);

        expect(getByText(/stateprop1 is/i).textContent).toBe('stateprop1 is false');
        fireEvent.click(getByText('Dispatch Success'));
        expect(getByText(/stateprop1 is/i).textContent).toBe('stateprop1 is true');
    })
})