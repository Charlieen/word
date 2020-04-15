import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component' 
import {SearchField} from './components/search/searchField';
import {word} from './components/search/data';
import Exercise1 from './components/exercise/index';


class App extends React.Component {

  constructor(){
    const words =  word.split(',');
    const wordObjects = words.map((w,index)=>({id:index,name:w}));

    super();
    this.state={monsters:wordObjects,back:[],words:wordObjects} 
  }
  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => (response.json()))
    // .then(data=> this.setState({monsters:[...data],back:data}))

    this.setState({monsters:this.state.words});
  } 
  /**
   * When search was declared, which means that when javascript first created our app component it also defined all of the methods
   * on our components including search and it saw that this was an arrow function and because of this when this arrow functions came
   * into existence to javascript it was going to bind any references to this inside of it to the context in which it was defined
   * which is our component just like we saw with our my func in the browser.
   * 
   * 
   */
  search = (term)=> {
      console.log('term:',term);
      if(term){
        const search = this.state.words.filter(item => item.name.includes(term));
        this.setState({monsters:search});
      }else {
        this.setState({monsters:this.state.words});
      }

  }
  //   // <CardList monsters={this.state.monsters}/>  
  render(){
    return (
      <div className="App">
      <Exercise1/>
      <SearchField search={this.search} />
      <CardList monsters={this.state.monsters}/>
      </div>
      
    );
  }
}

export default App;
