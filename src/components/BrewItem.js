import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BrewItem.css';


class BrewItem extends Component {
    render() {
        const { image, name, id } = this.props; 

        return(
            <div className='brew-item'>
                <div className='brew-image'>
                    <img src={image} />
                </div>
                <div>
                  <Link to={`/brews/${id}`}>
                    <p className='gbt-item__brew_name'>
                        {name}
                    </p>
                  </Link>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default BrewItem; 