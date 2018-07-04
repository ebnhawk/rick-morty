import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListContainer from './ListContainer'
import { loadData } from './reducer'
import Header from './Header'
import Pages from './Pages'

class Main extends Component {
  async componentDidMount() {
    await this.props.loadData()
  }
  render() {
    return (
      <div id="header-container">
        <Header />
        <ListContainer />
        <Pages />
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  loadData: (page = 1) => dispatch(loadData(page))
})

export default connect(
  null,
  mapDispatch
)(Main)
