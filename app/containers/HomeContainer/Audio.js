import React,{Component} from 'react';

class Audio extends Component{

    playorpausesong = () =>{
        const icon = this.props.previewUrl+"icon";
        this.stopprevioussong();
        localStorage.setItem("song",this.props.previewUrl);

        if(document.getElementById(this.props.previewUrl).paused){
            document.getElementById(this.props.previewUrl).play();
            document.getElementById(icon).innerHTML="<i class=\"fa fa-pause-circle\"></i>";
        }
        else{
            document.getElementById(this.props.previewUrl).pause();
            document.getElementById(icon).innerHTML="<i class=\"fa fa-play-circle\"></i>";

        }
        
    }


    stopprevioussong = () => {
        const prevsong = localStorage.getItem("song"); 
        const icon = prevsong+"icon";
        if(prevsong !== null){  
            if((document.getElementById(prevsong)!==null) && (prevsong !== this.props.previewUrl)){
                document.getElementById(prevsong).pause();
                document.getElementById(icon).innerHTML="<i class=\"fa fa-play-circle\"></i>";

            }
        }
    }

    songend = () =>{

        const icon = this.props.previewUrl+"icon";
        document.getElementById(icon).innerHTML="<i class=\"fa fa-play-circle\"></i>";
    }

    render(){
        const mystyle = {
            color: "black",
            border:"none",
            fontSize:"50px" 
          };
        const icon = this.props.previewUrl+"icon";
        return(
            <div>
                <audio 
                  id={this.props.previewUrl}
                  src={this.props.previewUrl}
                  onEnded={()=>{this.songend()}} > 
                </audio>
                
                <a id={icon} style = {mystyle} onClick={() => {this.playorpausesong()}}>
                <i class="fa fa-play-circle"></i>
                </a>
                
            </div>
        );
    }
}

export default Audio;

/*
if((document.getElementById(prevsong)!==null) && (prevsong !== this.props.previewUrl)){

*/