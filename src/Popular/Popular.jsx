import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import Loader from 'react-loader-spinner';
import { popularPlayingAsync } from '../redux/actions/showPopularAction';
import {showWishListAsync} from '../redux/actions/wishListAction';
import {showFavouriteListAsync} from '../redux/actions/favouriteAction';
import {useLoading} from '../redux/actions/isLoadingAction';
import {sortPopular} from '../redux/selectors/menuSelector';
import './Popular.css';


class Popular extends Component {

    componentDidMount(){
        this.props.popularPlayingAsync();
    }

    render(){
        return(
            <div>
                {this.props.isLoading ? <Loader 
                 type="Plane"
                 color="#00BFFF"
                 height="100"	
                 width="100"/> : 
                 <Grid prop={this.props.popularNow} addToFavourite={this.props.showFavouriteListAsync} addToWishList={this.props.showWishListAsync}/>
            }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return{
        popularNow: sortPopular(state),
        isLoading: state.showIsLoading
    }
}

function mapDispatchToProps(dispatch){
    return{
        popularPlayingAsync: function() {
            dispatch(popularPlayingAsync())
        },
        useLoading: function(){
            dispatch(useLoading())
    },
    showWishListAsync: function(event){
        dispatch(showWishListAsync(event))
    },
    showFavouriteListAsync: function(event) {
        dispatch(showFavouriteListAsync(event))
    }
  }
}

Popular.propTypes = {
    popularNow: PropTypes.array,
    isLoading: PropTypes.bool,

}

export default connect(mapStateToProps, mapDispatchToProps) (Popular);