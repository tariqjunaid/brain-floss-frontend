import React from 'react';
import { Input } from 'semantic-ui-react'


const Searchbar = (props) => {
   return (
      <div>
         <Input icon='search' placeholder='Search...' onChange={props.onSearch} value={props.searchTerm} />
      </div>
   )
}

export default Searchbar;