import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from './Table';
import Loader from '../../components/UI/Loader/Loader';
import ReactTable from "react-table";

configure({adapter: new Adapter()});

describe('<Auth/>', ()=>{
    it('should render <Loader/>', ()=>{
        const wrapper = shallow(<Table/>);
        wrapper.setProps({loader: true})
        expect(wrapper.find(Loader))
    })
    it('should render <ReactTable/>', ()=>{
        const wrapper = shallow(<Table />);
        wrapper.setProps({loader: false})
        expect(wrapper.find(ReactTable))
    })
});