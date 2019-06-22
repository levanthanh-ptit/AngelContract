import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Header.scss'

export class Header extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="Header-container">
                <div className = "btn">

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
