import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });


    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

//The reason we'll use a separate data-testid attribute specific for 
//testing purposes instead of using the id attribute is the same as why 
//we don't query an element by its class: to follow the best-practice 
//principle of separating concerns. The class and id attributes are used 
//for CSS and JavaScript selection. In the case of a change in styling, 
//we wouldn't want to break tests as a side effect of an unrelated change.
describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
