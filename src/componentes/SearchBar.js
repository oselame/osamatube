import React, { Component } from 'react';

import { Segment, Input } from 'semantic-ui-react';

class SearchBar extends Component {

    pesquisaTermo = e => {
        if (e.keyCode === 13) {
            const termo = e.target.value;
            
            console.log(termo);
        }
    }

    render() {
        return (
            <div className='search-bar'>
                <Segment stacked>
                    <Input icon='search' size='large' placeholder='Search...' 
                        onKeyDown={ (e) => this.pesquisaTermo(e) }/>
                </Segment>
            </div>
        );
    }

}

export default SearchBar;