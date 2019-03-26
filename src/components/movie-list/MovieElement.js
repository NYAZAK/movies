import React, { Component } from 'react';


export default class MovieElement extends Component{

    render(){
        return (
        <div className="w-25 p-2">
            <div className="card">
            <img alt="film" src="https://is1-ssl.mzstatic.com/image/thumb/Video71/v4/85/1c/82/851c823f-271e-877f-21ef-766b29f3a3a6/mzm.gjakfclu.lsr/268x0w.png" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">GLADIATOR</h5>
                <p className="card-text">Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, 
                qu'il a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de 
                l'amour que lui voue l'empereur, le fils de Marc Aurèle, Commode, s'arroge brutalement 
                le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à 
                ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand 
                d'esclaves, il devient gladiateur et prépare sa vengeance.</p>
            </div>
            </div>
        </div>
            )
    }



}

