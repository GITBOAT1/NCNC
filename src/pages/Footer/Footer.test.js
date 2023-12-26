import Footer from './Footer';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 


Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
    it('Footer component it renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toBeTruthy();
    });
    
    it('Should render the text "Copyright', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
    
});
