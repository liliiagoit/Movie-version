import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import Loader from 'react-loader-spinner';
import { soonPlayingAsync } from '../redux/actions/playSoonAction';
import {showWishListAsync} from '../redux/actions/wishListAction';
import {showFavouriteListAsync} from '../redux/actions/favouriteAction';
import {useLoading} from '../redux/actions/isLoadingAction';
import {sortPlaySoon} from '../redux/selectors/menuSelector';
import './PlaySoon.css';

class PlaySoon extends Component {

    componentDidMount() {
        this.props.soonPlayingAsync();
    }

    render() {
        return(
            <div>
            {this.props.isLoading ? <Loader 
            type="Plane"
            color="#00BFFF"
            height="100"	
            width="100"
         /> : <Grid prop={this.props.playingSoon} addToFavourite={this.props.showFavouriteListAsync} addToWishList={this.props.showWishListAsync}/>}
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        playingSoon: sortPlaySoon(state),
        isLoading: state.showIsLoading,
    }
}

function mapDispatchToProps(dispatch){
    return{
        soonPlayingAsync: function() {
            dispatch(soonPlayingAsync())
        },
        useLoading: function(){
            dispatch(useLoading())
    },
    showWishListAsync: function(event) {
        dispatch(showWishListAsync(event))
    },
    showFavouriteListAsync: function(event) {
        dispatch(showFavouriteListAsync(event))
    }
  }
}

PlaySoon.propTypes ={
    playingSoon: PropTypes.array,
    isLoading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaySoon);