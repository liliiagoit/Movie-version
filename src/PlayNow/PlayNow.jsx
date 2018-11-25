import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from "../Grid/Grid";
import Loader from 'react-loader-spinner';
import {nowPlayingAsync} from '../redux/actions/playNowAction';
import {showWishListAsync} from '../redux/actions/wishListAction';
import {showFavouriteListAsync} from '../redux/actions/favouriteAction';
import {useLoading} from '../redux/actions/isLoadingAction';
import {sortPlayNow} from '../redux/selectors/menuSelector';
import './PlayNow.css';

class PlayNow extends Component {

componentDidMount() {
    this.props.nowPlayingAsync();
}

    render(){
        return(
            <div>
             {this.props.isLoading ? <Loader 
            type="Plane"
            color="#00BFFF"
            height="100"	
            width="100"
         /> : <Grid prop={this.props.playingMovies} addToFavourite={this.props.showFavouriteListAsync} addToWishList={this.props.showWishListAsync}/>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        playingMovies: sortPlayNow(state),
        isLoading: state.showIsLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        nowPlayingAsync: function(){
            dispatch(nowPlayingAsync())
        },
        useLoading: function(){
            dispatch(useLoading())
        },
        showWishListAsync: function (event){
            dispatch(showWishListAsync(event))
        },
        showFavouriteListAsync: function(event){
            dispatch(showFavouriteListAsync(event))
        },
    }
}

PlayNow.propTypes = {
    playingMovies: PropTypes.array,
    isLoading: PropTypes.bool,
}
export default connect (mapStateToProps, mapDispatchToProps)(PlayNow);