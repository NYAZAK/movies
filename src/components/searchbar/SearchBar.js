import React, {Component} from 'react';
import Formik from 'formik';

export default class SearchBar extends Component{


submit= (values, action) => {
    console.log(values);

}

    render(){
        return (
            <Formik
            onSubmit={this.submit}
            initialValues={ {query: ' ' } }   
            >
                {({handleSubmit, handleChange, handleChange, handleBlur, isSubmitting}) =>  (
                    <form className='d-flex flex-row p-2 m-2' onSubmitting={handleSubmit}>
                    <input name="query" className='form-control flex-field mr-2' type="text" placeholder="Search..." onchange={handleChange} onBlur={handleBlur} />
                    <button className='btn btn-small btn-success' type="submit" disabled={isSubmitting}>Submit</button>  
                    </form>
                )}

            </Formik>
        )
    }

}