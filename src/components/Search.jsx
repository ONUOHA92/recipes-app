import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { search, handleChange, handleSubmit } = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className="text-slanted text-capitalize">
                            search recipes with {""}
                            <strong className="text-orange">
                                food2fork
                            </strong>
                        </h1>
                        <form className="mt-4">
                            <label htmlFor="" className="text-capitalize">
                                types Recipes seperated by comma
                         </label>
                            <div className="input-group">
                                <input type="text" name="search" 
                                className="form-control"
                                 placeholder="chicken, onion, carrots" 
                                 value={search}
                                 onChange={handleChange}
                                 />
                                 <div className="input-group-append">
                                    <button type="submit" className="input-group-text bg-primary text-white">
                                       <i className="fas fa-search" />
                                    </button>
                                 </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Search;