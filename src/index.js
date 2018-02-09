/**
 * @class EmptyPlaceholder
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

const excludedTags = ['iframe']

function isEmpty (node) {
  const type = typeof node
  if (type === 'string' || type === 'number') {
    return false
  } else if (type === 'object') {
    if (Array.isArray(node)) {
      return node.every(isEmpty)
    }
    if (excludedTags.includes(node.type)) {
      return false
    }
    return isEmpty(node.props.children)
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

  render () {
    return isEmpty(this.props.children) ? this.props.placeholder : this.props.children
  }
}
