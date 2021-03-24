import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdaptor from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure( { adapter: new EnzymeAdaptor()})

test('renders without error', () => {
  const wrapper = shallow( <App />)
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
});

test("renders button", () => {
  const wrapper = shallow( <App />)
  const button = wrapper.find("[data-test='increment-button']")
  expect(button.length).toBe(1)
})
test("renders counter display", () => {
  const wrapper = shallow( <App />)
  const counterDisplay = wrapper.find("[data-test='counter-display']")
  expect(counterDisplay.length).toBe(1)
})

test("counter starts at 0", () => {

})
test("clickingon button increments counter display", () => {

})