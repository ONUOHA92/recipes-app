import React, { Component } from 'react';
import Header from '../components/Header'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <Header title="Amazing Recipes">
                    <Link to="/recipes" className="text-uppercase btn-secondary btn-lg mt-4 text-decoration-none">
                      search recipes
                    </Link>
                </Header>
            </div>
        );
    }
}

export default Home;