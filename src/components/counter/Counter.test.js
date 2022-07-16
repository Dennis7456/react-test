import React from 'react';
import { mount, shallow, dive } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
    it('renders a button element', () => {
        const counterWrapper = shallow(<Counter />);
        const counterButton = counterWrapper.find('button');

        expect(counterButton).toHaveLength(1);
    })

    it('has state', () => {
        const counterWrapper = shallow(<Counter />);
        const counterState = counterWrapper.state();

        expect(counterState).not.toBe(null);
    })

    it('has a count property', () => {
        const counterWrapper = shallow(<Counter />);
        const counterState = counterWrapper.state();
    
        expect(counterState.count).toBeDefined();
      });

      it('', () => {
        const counterWrapper = shallow(<Counter />);
        const counterInstance = counterWrapper.instance();

        expect(counterInstance.state.count).toBe(0);
        counterInstance.increment();
        expect(counterInstance.state.count).toBe(1);

      })
})