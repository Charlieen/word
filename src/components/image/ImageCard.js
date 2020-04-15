import React from 'react';
/*
    Let the ImageCard render itself and its iamge
    Reach into the DOM and figure out the height of the image
    Set the image height on state to get the component to rerender
    When rerendering, assign a 'grid-row-end'to make sure the image takes up
    the appropirate space

    ------
    React Refs
    Gives access to a single DOM element
    We create refs in the constructor, assign them to instance variables,then
    pass to a particular JSX element as props
*/
class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.imageRef=  React.createRef();
        this.state= {spans:0};
    }
    /*
        So essentially it's the order of operations thing 
    */
    componentDidMount(){
        console.log(this.imageRef);
    this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans = ()=>{
        const height =this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans:spans});
    }


    render(){
        const {description,urls} = this.props.image;
        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt ={description} src= {urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;