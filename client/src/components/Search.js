import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    render() {
        return (
                <div className="search">
                    <input type="text"
                        onChange={this.props.handleOnInputChange} 
                        value={this.props.inputSearch} 
                        placeholder="Search Items"
                        className="form-control" />
                    <span className="fa fa-search" />
                </div>
        )
    }
}

Search.propTypes = {
    inputSearch: PropTypes.string.isRequired,
    handleOnInputChange: PropTypes.func.isRequired
}

export default Search
