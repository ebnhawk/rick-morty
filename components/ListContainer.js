import React from 'react'
import { connect } from 'react-redux'

const ListContainer = props => {
  const { data } = props
  return (
    <div id="list-container">
      {data.map(item => {
        return (
          <div key={item.id} className="item-container-small">
            <img src={item.image} className="img-small" />
            <h4>{item.name}</h4>
          </div>
        )
      })}
    </div>
  )
}

const mapState = ({ data }) => ({ data })

export default connect(mapState)(ListContainer)
