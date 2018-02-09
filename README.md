# react-empty-placeholder

> Placeholder component to wrap the content(other components) that you don't know if it will show anything

[![NPM](https://img.shields.io/npm/v/react-empty-placeholder.svg)](https://www.npmjs.com/package/react-empty-placeholder) [![NPM](https://img.shields.io/npm/l/react-empty-placeholder.svg)](https://www.npmjs.com/package/react-empty-placeholder) [![Travis](https://img.shields.io/travis/Donaldcwl/react-empty-placeholder.svg)](https://travis-ci.org/Donaldcwl/react-empty-placeholder/) [![Codecov](https://img.shields.io/codecov/c/github/Donaldcwl/react-empty-placeholder.svg)](https://codecov.io/gh/Donaldcwl/react-empty-placeholder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-empty-placeholder
# or
npm install --save react-empty-placeholder
```

## Usage

```jsx
import React, { Component } from 'react'

import EmptyPlaceholder from 'react-empty-placeholder'

class Example extends Component {
  render () {
    return (
      <EmptyPlaceholder placeholder={<div>placeholder if nothing display inside</div>}>
        {this.props.boolean && <div>show when boolean is truthy</div>}

        <SomeComponentYouDontKnowIfItWillShowAnything />
      </EmptyPlaceholder>
    )
  }
}
```

## License

MIT © [Donald](https://github.com/donaldcwl)
