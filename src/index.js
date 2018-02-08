/**
 * @class EmptyPlaceholder
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

function isEmpty (nodes) {
  const type = typeof nodes
  if (type === 'string') {
    return false
  } else if (type === 'object') {
    return Array.from(nodes).every(isEmpty)
  } else {
    return true
  }
}

export default class EmptyPlaceholder extends Component {
  static propTypes = {
    placeholder: PropTypes.node,
  }
  static defaultProps = {
    placeholder: 'N/A',
  }

  state = {}

  render () {
    return isEmpty(this.props.children) ? this.props.placeholder : this.props.children
  }
}
