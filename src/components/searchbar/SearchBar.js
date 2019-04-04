import React, {Component} from 'react';
import {Formik} from 'formik';
import searchIcon from '../asset/searchicon.png';
import apiMovie, {movieMap} from '../../conf/api.movie';
export default class SearchBar extends Component{


submit= (values, action) => {
    const query = '?' + Object.keys(values).map(k => `${k}=${values[k]}&`).join('');
    apiMovie.get('/search/movie' + query)
    .then(
        res => res.data.results 
      ).then(movieApi => {
        const movies = movieApi.map(movieMap)
        this.props.updateMovies(movies);
        action.setSubmitting(false);
        }
      )
      .catch(
      err => console.log({error : err})
      )
}

    render(){
        return (
            <Formik
            onSubmit={this.submit}
            initialValues={ {query: '', language: 'en-US' } } >

                {({handleSubmit, handleChange, handleBlur, isSubmitting}) =>  (
                    <form className='d-flex flex-row p-2 m-2' onSubmit={handleSubmit}>
                    <input name="query" className='form-control flex-field mr-2' type="text" placeholder="Search..." onChange={handleChange} onBlur={handleBlur} />
                    <select name="language" id="langage" className="mr-2 col-1 form-control w-25" 
                    onChange={handleChange} onBlur={handleBlur} >
                    <option value="en-US">Ang</option>
                    <option value="en-FR">Fr</option>
                    </select>
                    <button className='btn btn-small btn-light' type="submit" disabled={isSubmitting}>
                    <img style={  {'maxWidth':'20px'} } src={searchIcon} alt=""/>
                    </button>  
                    </form>
                )}

            </Formik>
        )
    }

}