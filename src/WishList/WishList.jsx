import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {useLoading} from '../redux/actions/isLoadingAction';
import {deleteFromWishList, openWishList} from '../redux/actions/wishListAction';
import {sortWishList} from '../redux/selectors/menuSelector';
import Grid from '../Grid/Grid';
import './WishList.css';

class WishList extends Component {

componentDidMount () {
    this.props.openWishList()
};

    render(){
        return(
            <div>
        <Grid prop={this.props.wishList} addToWishList={this.props.deleteFromWishList}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        wishList: sortWishList(state),
        isLoading: state.showIsLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteFromWishList: function(event) {
            dispatch(deleteFromWishList(event))
        },
        useLoading: function(){
            dispatch(useLoading())
    },
    openWishList: function() {
        dispatch(openWishList())
    }
  }
}

WishList.propTypes = {
    wishList: PropTypes.array,
    isLoading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);