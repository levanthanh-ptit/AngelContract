import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Board.scss'
import { Route } from 'react-router-dom'

export class Board extends Component {

    onScrollHandle = (e) => {
        if (e.target.scrollTop > 0)
            this.props.setLayout("side collapse-header")
        else this.props.setLayout("side")
    }
    render() {
        return (
            <div className="Board-container"
                onScroll={e => this.onScrollHandle(e)}
            >
                <Route path="/"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
