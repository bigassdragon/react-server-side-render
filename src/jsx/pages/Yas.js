/**
 * Created by Hikyu on 12/24/2016.
 */

'use strict';
import React from 'react';
import {Link} from 'react-router';
import Actions from '../../js/actions';

let Yas = (props) =>{

    console.log('Whats being passed here? ', JSON.stringify(props, null, 2));
    //shit goes here
    return (
        <div  className="yastainer">
            <span className="yasline"> SPAM SPAM SPAM</span>
        </div>
    );
};
export  default Yas;