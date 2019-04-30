import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import AboutUs from '../app/components/AboutUs';

describe('<AboutUs />', () => {
	const wrapper = shallow(<AboutUs />);
	it('should render `.AboutUs` component', () => {
		expect(wrapper.find(cardList).length).toBe(2)
	})
});

//array test case
const wrapper = shallow(<AboutUs />);
	it('should render `.AboutUs` component', () => {
		expect(Array.isArray(cardList[])).toBe(true);
	})

	
describe('Addition', () => {
	it('knows that 2 and 2 make 4', () => {
		expect(2 + 2).toBe(4);
	});
});
