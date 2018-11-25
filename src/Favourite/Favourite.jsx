import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteFromFavouriteList, getFavouriteList} from '../redux/actions/favouriteAction';
import {sortFavouriteList} from '../redux/selectors/menuSelector';
import Grid from '../Grid/Grid';
import './Favourite.css';

class Favourite extends Component {

componentDidMount() {
    this.props.getFavouriteList();
}

    render() {
        return(
            <div>
     {<Grid prop={this.props.favouriteList} addToFavourite={this.props.deleteFromFavouriteList}/>}
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        favouriteList: sortFavouriteList(state),
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteFromFavouriteList: function(event){
            dispatch(deleteFromFavouriteList(event))
        },
        getFavouriteList: function() {
            dispatch(getFavouriteList())
        }
    }
}

Favourite.propTypes = {
    favouriteList: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);