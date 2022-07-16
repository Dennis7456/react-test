import React from 'react';
import { shallow } from 'enzyme';
import PersonList from './PersonList';

describe('PersonList', () => {
    
    it('renders a ul element', () => {
        const PersonListWrapper = shallow(<PersonList />);
        const peopleListUls = PersonListWrapper.find('ul');

        expect(peopleListUls).toHaveLength(1);
    });

    it('renders no li elements when no people exist', () => {
        const people = [];
        const PersonListWrapper = shallow(<PersonList people={people} />);
        const peopleListItems = PersonListWrapper.find('li');

        expect(peopleListItems).toHaveLength(0);
    });

    it('renders one li elements when no people exist', () => {
        const people = [{firstName: 'Alan', lastName:'Turing'}];
        const PersonListWrapper = shallow(<PersonList people={people} />);
        const peopleListItems = PersonListWrapper.find('li');

        expect(peopleListItems).toHaveLength(1);
    });

    it('renders one li element for each person that exists', () => {
        const people = [
            {firstName: 'Jane', lastName:'Curtin'},
            {firstName: 'Chevy', lastName:'Chase'}];
        const PersonListWrapper = shallow(<PersonList people={people} />);
        const peopleListItems = PersonListWrapper.find('li');

        expect(peopleListItems).toHaveLength(2);
    });

    it('', () => {
        const people = [
            {firstName: 'Jane', lastName:'Curtin'}
        ];
        const PersonListWrapper = shallow(<PersonList people={people} />);

        expect(PersonListWrapper.find('li').text()).toContain(people[0].firstName);
        expect(PersonListWrapper.find('li').text()).toContain(people[0].lastName);

    })

})