import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Auth from './Auth';
import Button from '../../components/UI/Button/Button';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

configure({adapter: new Adapter()});

describe('<Auth/>', ()=>{
    it('should render <Button/>', ()=>{
        const wrapper = shallow(<Auth/>);
        expect(wrapper.find(Button))
    });
    it('should render <Button/> with "Sign out" value', ()=>{
        const wrapper = shallow(<Auth/>);
        expect(wrapper.contains(<Button>Sign out</Button>)).toEqual(true)
    });
    it('should render <StyledFirebaseAuth/>', ()=>{
        const wrapper = shallow(<Auth/>);
        expect(wrapper.find(StyledFirebaseAuth))
    })
});