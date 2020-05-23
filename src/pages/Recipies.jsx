import React, { Component } from 'react';
import Search from '../components/Search'
import RecipeList from '../components/RecipeList'

// this data will be imported here
import {recipeData} from '../data/tempList'

class Recipies extends Component {
     
    constructor(props){
        super(props);
        this.state = {
            recipes: recipeData,
            search: ''
        }

    }


    handleChange = (e) => {
        this.setState({
            search : e.target.value
        })
    };


    handleSubmit = (e) => {
        e.preventDefault()
    }

    
    render() {
        return (
            <>
            
             <Search sreach={this.state.search} 
              handleSubmit={this.handleChange} 
              handleSubmit={this.handleSubmit}
              />

             <RecipeList recipes={this.state.recipes} />  
            </>
        );
    }
}

export default Recipies;