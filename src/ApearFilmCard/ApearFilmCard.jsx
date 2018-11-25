import React, {Component} from 'react';
import { connect } from 'react-redux';
import RelatedMovies from '../RelatedMovies/RelatedMovies';
import PropTypes from 'prop-types'; 
import {appearCardFilmAsync} from '../redux/actions/appearFilmCardAction';
import {useLoading, useLoadingEnd} from '../redux/actions/isLoadingAction';
import Loader from 'react-loader-spinner';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import './ApearFilmCard.css';

class ApearFilmCard extends Component {

    state = {
        isLoading: true,
    };


    componentWillReceiveProps (nextProps) {
        if(this.props.match.params.id !== nextProps.match.params.id) {
            this.props.appearCardFilmAsync(nextProps.match.params.id)
        }
        
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.appearCardFilmAsync(id)
        setTimeout(() => this.show(), 2000)
    }

    show = () => {
        this.setState({
            isLoading: false,
        })
    }

    render() {
    return (  
   <div className='mainly_div'>
   {this.state.isLoading ? 
 <Loader
     type="Plane"
     color="#00BFFF"
   height="100"	
    width="100"
  />  
      : <div className='apear_film_card'>
        <div className='film_background' style={{backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("https://image.tmdb.org/t/p/w300${this.props.movie_info.backdrop_path}")`}}>
        <img src={`https://image.tmdb.org/t/p/w300${this.props.movie_info.poster_path}`} alt='film' className='img_about_film'/>
        <div className='info_film'>
        <h3>{this.props.movie_info.title ? this.props.movie_info.title : null}</h3>
        <p>{this.props.movie_info.original_title ? this.props.movie_info.original_title : null}</p>
        <p>{this.props.movie_info.genres ? this.props.movie_info.genres.map(el => `${el.name} ` ) : null}</p>
        <p>{this.props.movie_info.runtime ? this.props.movie_info.runtime + ` min` : null}</p>
        <p>{this.props.movie_info.release_date ? `${this.props.movie_info.release_date}`.substring(0,4) : null}</p>
        </div>
    </div>
    <div className='information_film'>
    <div className='overview_film'>
        <h5 className='overview_movie_title'>OVERVIEW</h5>
        <p className='overview_movie_text'>{this.props.movie_info.overview ? this.props.movie_info.overview : <h4>Sorry, but nothing to read</h4>}</p>
    </div>
    <i className="fab fa-youtube-square"> youtube</i>
    <div className='youtube_movie'> {this.props.movie_info.trailers.length ? <iframe title='trailer' src={`https://www.youtube.com/embed/${this.props.movie_info.trailers[0].key}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> : <h3>SORRY, NOT FOUND THIS TRAILER</h3>}</div>
   </div>
   <h3 className='title_related_movies'>SIMILAR MOVIES</h3>
                      <StyleRoot>
                      <Coverflow
                          displayQuantityOfSide={1}
                          navigation={true}
                          enableHeading={true}
                          active={0}
                          media={{
                              '@media (min-width: 320px)': {
                                  width: '300px',
                                  height: '350px'
                              },
                              '@media (min-width: 768px)': {
                                  width: '400px',
                                  height: '350px'
                              },
                              '@media (min-width: 1280px)': {
                                  width: '620px',
                                  height: '530px'
                              },
                          }}
                      >
{this.props.movie_info.recommendations.map(el => <RelatedMovies poster={el.poster_path} key={el.id} id={el.id}/>)} 
    </Coverflow>
    </StyleRoot>
   </div>
}  
    </div>
    )}}


function mapStateToProps(state) {
    return {
        movie_info: state.showAppearFilmCard,
        isLoading: state.showIsLoading,
        clearInput: state.clearInput,
    }
}

function mapDispatchToProps(dispatch){
    return {
        appearCardFilmAsync: function(id){
            dispatch(appearCardFilmAsync(id))
        },
        useLoading: function(){
            dispatch(useLoading())
    },
    useLoadingEnd: function (){
        dispatch(useLoadingEnd())
    }
}
}

ApearFilmCard.propTypes = {
    nextProps: PropTypes.object,
    isLoading: PropTypes.bool,
    id: PropTypes.number,
    show: PropTypes.func,
    movie_info: PropTypes.object,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
    genres: PropTypes.array,
    runtime: PropTypes.number,
    release_date: PropTypes.number,
    overview: PropTypes.string,
    trailers: PropTypes.array,
    recommendations: PropTypes.string,
    poster: PropTypes.string,
    key: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(ApearFilmCard);
