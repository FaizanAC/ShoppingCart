import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Filter extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="row mt-4">
                    {this.props.count} products found.
                </div>
                <div className="row mt-4">
                    <label>
                        Sort by
                        <select className="form-control mt-1" value={this.props.sort}
                            onChange={this.props.handleChangeSort}>
                            <option value="">Newest</option>
                            <option value="lowest">Lowest to Highest</option>
                            <option value="highest">Highest to Lowest</option>
                        </select>
                    </label>
                </div>
                <div className="row mt-4">
                    <label>
                        Filter Product Types
                        <select className="form-control mt-1" value={this.props.type}
                            onChange={this.props.handleChangeType}>
                            <option value="">No Filter</option>
                            <option value="tool">Tools</option>
                            <option value="food">Food</option>
                            <option value="furniture">Furniture</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}

Filter.propTypes = {
    type: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired,
    handleChangeSort: PropTypes.func.isRequired,
    handleChangeType: PropTypes.func.isRequired
}

export default Filter
