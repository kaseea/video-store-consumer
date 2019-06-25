import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Search extends Component {



render() {
    return (
        <div>
        { console.log(this.props.customer) }
        <h2>THIS IS A SEARCH</h2>
        </div>
    )
    }
}

Search.propTypes = {

};

export default Search;