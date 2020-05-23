import React, { Component } from 'react';
import Recipe from './Recipe'

class RecipeList extends Component {
    render() {
        return (
            <div>
                <p>Hello from RecipeList</p>
                  <Recipe />
            </div>
        );
    }
}

export default RecipeList;