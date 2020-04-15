import React from 'react';

class ImageList extends React.Component {
    state= {v1:null};
    
    // this.getImageList(this.props.imgs)
     

    render(){

        if(this.props.imgs.length>0){
            return (
                <div class="ui grid">
                    <div class="four wide column"><img class="ui small image" src={this.props.imgs[0].urls.small}/></div>
                    <div class="four wide column"><img class="ui small image" src={this.props.imgs[1].urls.small}/></div>
                    <div class="four wide column"><img class="ui small image" src={this.props.imgs[2].urls.small}/></div>
                    <div class="four wide column"><img class="ui small image" src={this.props.imgs[3].urls.small}/></div>
                    <div class="four wide column"><img class="ui small image" src={this.props.imgs[4].urls.small}/></div>
                    <div class="four wide column"><img class="ui small image" src={this.props.imgs[5].urls.small}/></div>
                    <div class="four wide column"><img class="ui small image" src={this.props.imgs[6].urls.small}/></div>
                    <div class="four wide column"><img class="ui small image" src={this.props.imgs[7].urls.small}/></div>
                    <div class="four wide column"><img class="ui small image" src={this.props.imgs[8].urls.small}/></div>
                    <div class="four wide column"><img class="ui small image" src={this.props.imgs[9].urls.small}/></div>
                </div>
            );
        }else {
            return (
                <div>loading...</div>
            )
        }

        
    }

    getImageList(imgs)  {
        
    var imglist=[];
    for(let i=0; i< imgs.length;i++){
        imglist.push(
          <div class="four wide column">
          <img class="ui small image" src={imgs[i].urls.small}/>
         </div> 
        )
    }
    return ( 
        <div class="ui grid">
        {imglist}
        </div>
    );
    }
    
}

export default ImageList;