import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EmptyPlaceholder from './'

configure({ adapter: new Adapter() })

const defaultPlaceholder = EmptyPlaceholder.defaultProps.placeholder

describe('EmptyPlaceholder', () => {
  it('is truthy', () => {
    expect(EmptyPlaceholder).toBeTruthy()
  })
})

describe('Children is primitive type', () => {
  it('number', () => {
    const block = shallow(<EmptyPlaceholder>123</EmptyPlaceholder>)
    expect(block.text()).toEqual('123')
  })

  it('boolean', () => {
    const block = shallow(<EmptyPlaceholder>true</EmptyPlaceholder>)
    expect(block.text()).toEqual('true')
  })

  it('single word', () => {
    const block = shallow(<EmptyPlaceholder>word</EmptyPlaceholder>)
    expect(block.text()).toEqual('word')
  })

  it('sentence', () => {
    const block = shallow(<EmptyPlaceholder>this is a sentence</EmptyPlaceholder>)
    expect(block.text()).toEqual('this is a sentence')
  })
})

describe('Children is single dom', () => {
  it('single dom', () => {
    const block = shallow(<EmptyPlaceholder><p>abc</p></EmptyPlaceholder>)
    expect(block.text()).not.toEqual(defaultPlaceholder)
  })

  it('single dom (empty)', () => {
    const block = shallow(<EmptyPlaceholder><p></p></EmptyPlaceholder>)
    expect(block.text()).toEqual(defaultPlaceholder)
  })
})

describe('Children is single deep dom', () => {
  it('deep dom', () => {
    const block = shallow(<EmptyPlaceholder>
      <p><h1>abc</h1></p>
    </EmptyPlaceholder>)
    expect(block.text()).not.toEqual(defaultPlaceholder)
  })

  it('deep dom (empty)', () => {
    const block = shallow(<EmptyPlaceholder>
      <p><h1></h1></p>
    </EmptyPlaceholder>)
    expect(block.text()).toEqual(defaultPlaceholder)
  })
})

describe('Children is array of dom', () => {
  it('array of dom (all have content)', () => {
    const block = shallow(<EmptyPlaceholder><p>a</p><p>b</p></EmptyPlaceholder>)
    expect(block.text()).not.toEqual(defaultPlaceholder)
  })

  it('array of dom (only 1 has content)', () => {
    const block = shallow(<EmptyPlaceholder><p></p><p>b</p></EmptyPlaceholder>)
    expect(block.text()).not.toEqual(defaultPlaceholder)
  })

  it('array of dom (all empty)', () => {
    const block = shallow(<EmptyPlaceholder><p></p><p></p></EmptyPlaceholder>)
    expect(block.text()).toEqual(defaultPlaceholder)
  })
})

describe('Children is iframe', () => {
  it('iframe', () => {
    const block = shallow(<EmptyPlaceholder>
      <iframe src='https://google.com' frameborder='0' />
    </EmptyPlaceholder>)
    expect(block.text()).not.toEqual(defaultPlaceholder)
  })
})

describe('Custom placeholder', () => {
  it('placeholder is text', () => {
    const block = shallow(<EmptyPlaceholder placeholder='nothing shows'></EmptyPlaceholder>)
    expect(block.text()).toEqual('nothing shows')
  })
  it('placeholder is dom', () => {
    const block = shallow(<EmptyPlaceholder placeholder={<h1>nothing shows</h1>}></EmptyPlaceholder>)
    expect(block.html()).toEqual('<h1>nothing shows</h1>')
  })
})
