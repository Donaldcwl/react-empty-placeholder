import React, { Component } from 'react'

import EmptyPlaceholder from 'react-empty-placeholder'

export default class App extends Component {
  state = {
    files: [],
    loading: false,
  }

  componentDidMount () {
    this.setState({ loading: true })
    // simulate fetch data from server
    window.setTimeout(() => {
      this.setState({ files: [], loading: false })
    }, 3000)
  }

  render () {
    const { files, loading } = this.state
    return (
      <div>
        <h1>File download page</h1>
        <EmptyPlaceholder placeholder='No file available'>

          {loading && <div>loading...</div>}

          {files.map(file => (
            <a href={file.url}>Download {file.name}</a>
          ))}
          <SomeComponentYouDontKnowIfItWillShowAnything />

          <SomeComponentDependOnFilesButYouDontCareAboutTheLogicInside files={files} />

        </EmptyPlaceholder>
      </div>
    )
  }
}

class SomeComponentYouDontKnowIfItWillShowAnything extends Component {
  render () {
    return Math.random() > 0.5 ? 'hi' : null
  }
}

class SomeComponentDependOnFilesButYouDontCareAboutTheLogicInside extends Component {
  render () {
    if (this.props.files.length) {
      return 'Total ' + this.props.files.length + ' files'
    } else {
      return null
    }
  }
}
