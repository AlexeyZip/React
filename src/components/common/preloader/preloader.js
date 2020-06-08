import React from 'react';
import rolling from '../../../assets/images/rolling.svg';


let Preloader = (props) => {
   return <div>
        {<img src={rolling} />}
    </div>
}

export default Preloader;