import React, { Component, Fragment } from 'react';
import CategoryCard from '../components/category/CategoryCard';
import Search from '../components/category/Search';
import { CardDeck } from 'reactstrap';

const API = 'https://opentdb.com/api_category.php';

class CategoryContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchTerm: '',
         categories: [],
         
      };
   }

   componentDidMount() {
      fetch(API)
         .then(response => response.json())
         .then(data => {
            this.setState({
               categories: data.trivia_categories
            });
         })
   }
   

   onSearch = (event) => {
      this.setState({ searchTerm: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)})
   }

   render() { 
      let filteredCategories = this.state.categories.filter(category => category.name.includes(this.state.searchTerm));

      return (
         <Fragment>
            {
            this.state.categories &&
               <Fragment>
                  <Search onSearch={this.onSearch} searchTerm={this.state.searchTerm} />
                  <br/>
                  <div className="container">
                     <CardDeck>
                        {filteredCategories.map(category => <CategoryCard
                        id={category.id}
                        key={category.id}
                        category={category.name}
                        getDiff={this.props.getDiff}
                        getId={this.props.getId} />)}
                     </CardDeck>
                  </div>
               </Fragment>
            }
         </Fragment>
      )
   }
}

export default CategoryContainer;