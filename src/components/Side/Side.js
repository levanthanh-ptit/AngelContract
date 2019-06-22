import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Side.scss'
export class Side extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="Side-container">
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Side)
