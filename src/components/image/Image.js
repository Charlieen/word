import React from 'react'
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import ImageListFn from './ImageList_f';
/*
    Component renders 
*/
class Image extends React.Component {

    state= {imgs:[]};
    
    componentDidMount(){
        this.onSearchSubmit2(this.props.term);
    }

   async onSearchSubmit2(term){
       const pics = await  unsplash.get('/search/photos',{
        params:{query:term}
    });

        this.setState({imgs:pics.data.results})

    }
    
    render(){
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <ImageListFn imgs={this.state.imgs} />
                Found:{this.state.imgs.length} images.
            </div>
        );
    }
}

export default Image