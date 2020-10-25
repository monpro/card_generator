import React from 'react'
import { mount, shallow } from 'enzyme'
import BasicInput from '../components/BasicInput'

describe('test BasicInput components with email type', () => {
  const wrapper = mount(
    <BasicInput
      title={'email test title'}
      type={'email'}
      dispatch={() => {}}
      errorHelperText={'test error text'}
    />
  )

  it('it renders the text field', () => {
    expect(wrapper.find('input[type="text"]')).toHaveLength(1)
  })

  it('it renders the h6 heading', () => {
    expect(wrapper.find('h6')).toHaveLength(1)
    expect(wrapper.find('h6').text()).toBe('email test title')
  })

  it('should have error text when input invalid email', () => {
    wrapper.find('input[type="text"]').simulate('change', {
      target: {
        value: 'notemail@gmail',
      },
    })
    // when input the email in wrong format
    // the errorHelperText will be contained by wrapper.html()
    expect(wrapper.html()).toContain('test error text')

    wrapper.find('input[type="text"]').simulate('change', {
      target: {
        value: 'isemail@gmail.com',
      },
    })
    // when input the email in correct format
    // the errorHelperText will not be contained by wrapper.html()
    expect(wrapper.html()).not.toContain('test error text')
  })

  describe('test BasicInput components with postcode type', () => {
    const wrapper = mount(
      <BasicInput
        title={'postcode test title'}
        type={'postcode'}
        dispatch={() => {}}
        errorHelperText={'test error text'}
      />
    )

    it('should have error text when input invalid email', () => {
      wrapper.find('input[type="text"]').simulate('change', {
        target: {
          value: '2013s',
        },
      })
      // when input the post in wrong format
      // the errorHelperText will be contained by wrapper.html()
      expect(wrapper.html()).toContain('test error text')

      wrapper.find('input[type="text"]').simulate('change', {
        target: {
          value: '2013',
        },
      })
      // when input the post in correct format
      // the errorHelperText will not be contained by wrapper.html()
      expect(wrapper.html()).not.toContain('test error text')
    })
  })

  describe('test BasicInput components with postcode type', () => {
    const wrapper = mount(
      <BasicInput
        title={'postcode test title'}
        type={'postcode'}
        dispatch={() => {}}
        errorHelperText={'test error text'}
      />
    )

    it('should have error text when input invalid email', () => {
      wrapper.find('input[type="text"]').simulate('change', {
        target: {
          value: '2013s',
        },
      })
      // when input the post in wrong format
      // the errorHelperText will be contained by wrapper.html()
      expect(wrapper.html()).toContain('test error text')

      wrapper.find('input[type="text"]').simulate('change', {
        target: {
          value: '2013',
        },
      })
      // when input the post in correct format
      // the errorHelperText will not be contained by wrapper.html()
      expect(wrapper.html()).not.toContain('test error text')
    })
  })

  describe('test BasicInput components with phone type', () => {
    const wrapper = mount(
      <BasicInput
        title={'phone test title'}
        type={'phone'}
        dispatch={() => {}}
        errorHelperText={'test error text'}
      />
    )

    it('should have error text when input invalid email', () => {
      wrapper.find('input[type="text"]').simulate('change', {
        target: {
          value: 'x123456789',
        },
      })
      // when input the phone in wrong format
      // the errorHelperText will be contained by wrapper.html()
      expect(wrapper.html()).toContain('test error text')

      wrapper.find('input[type="text"]').simulate('change', {
        target: {
          value: '0410680111',
        },
      })
      // when input the phone in correct format
      // the errorHelperText will not be contained by wrapper.html()
      expect(wrapper.html()).not.toContain('test error text')
    })
  })

  describe('test BasicInput components with phone type', () => {
    const wrapper = mount(
      <BasicInput
        title={'phone test title'}
        type={'phone'}
        dispatch={() => {}}
        errorHelperText={'test error text'}
      />
    )
    it('should have error text when input invalid email', () => {
      wrapper.find('input[type="text"]').simulate('change', {
        target: {
          value: 'x123456789',
        },
      })
      // when input the phone in wrong format
      // the errorHelperText will be contained by wrapper.html()
      expect(wrapper.html()).toContain('test error text')

      wrapper.find('input[type="text"]').simulate('change', {
        target: {
          value: '0410680111',
        },
      })
      // when input the phone in correct format
      // the errorHelperText will not be contained by wrapper.html()
      expect(wrapper.html()).not.toContain('test error text')
    })
  })
  //TODO: Add more unit test
})
