import React, { Component } from 'react';
import Header from '../components/Header'
import {Link} from 'react-router-dom'

class Default extends Component {
    render() {
        return (

            <Header title="404"  StyleClass="default-hero">
                <h2 className="text-light text-uppercase mb-4">
                    you are in the wrong place
              </h2>
                <Link to="/" className="text-uppercase btn-secondary btn-lg mt-3 text-decoration-none">
                    return home
                 </Link>
            </Header>

        );
    }
}

export default Default;