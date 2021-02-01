import React from 'react';
import { FavorisList } from './components';
import { Loading } from '../../components';


export default (props) => {
        return (
        <div
        className="d-fle flex-row flex-fill pt-4 p-2">
       
            {props.loaded ? (
                <div className="d-flex flex-row border flex-fill pt-4 p-2">
                     <FavorisList
        favoris={props.favoris}
        removeFavoris={props.removeFavoris}        
        />
                </div>
            ) : (
                    <Loading/>
                )}


        </div>
        
                )
}