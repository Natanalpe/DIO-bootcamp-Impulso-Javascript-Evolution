import React, { Component } from 'react';

export default class Twitter extends Component {

  componentWillMount() {
    const { posts } = this.props
    console.log('componenteWillMount', posts)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount fui removido')
  }

  render() {
    const { posts } = this.props
    console.log('render', posts )
    return (
      <div>
        {posts[0].title}
      </div>
    )
  }
}