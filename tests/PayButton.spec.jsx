/* global describe it */

import PayButton from '../components/PayButton'
import Button from '../components/Button'
import { ok, equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(PayButton)

describe('PayButton', () => {
  describe('default', () => {
    const payButton = render({ price: '10.15' }, 'Click me')

    it('renders element Button', () => {
      equal(payButton.type, Button)
    })

    describe('price', () => {
      it('has the span component inside the button', () => {
        equal(payButton.props.children[1].type, 'span')
      })

      it('has the cui__button__price component inside the button', () => {
        equal(payButton.props.children[1].props.className, 'cui__button__price')
      })

      it('has the price as the content of the span', () => {
        ok(payButton.props.children[1].props.children.match('10.15'))
      })
    })
  })
})
