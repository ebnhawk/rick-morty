import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pagination from 'react-js-pagination'
import { loadData } from './reducer'

class Pages extends Component {
  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this)
  }
  handlePageChange(pageNumber) {
    this.props.loadData(pageNumber)
  }
  render() {
    return (
      <div>
        <Pagination
          activePage={this.props.activePage}
          itemsCountPerPage={20}
          totalItemsCount={this.props.count}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          innerClass="pages-ul"
          itemClass="pages-li"
        />
      </div>
    )
  }
}

const mapState = ({ activePage, count }) => ({ activePage, count })
const mapDispatch = dispatch => ({
  loadData: (page = 1) => dispatch(loadData(page))
})

export default connect(
  mapState,
  mapDispatch
)(Pages)
