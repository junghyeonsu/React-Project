import React, {Component} from 'react';

/* library */
import axios from 'axios';

/* css */
import './melon.css';

class MelonCrawling extends Component {
    state = {
        fetchDate : [],
    }

    async componentDidMount(){
        const crawling = await axios.request('/api/melon');
        this.setState({fetchDate : crawling.data});
        console.log(crawling.data);
    }

    render(){
        return(
              <table className="table table-dark">
                <thead>
                   <tr>
                      <td>순위</td><td></td><td>곡</td><td>아티스트</td><td>앨범</td> 
                 </tr>
                </thead>
               <tbody>
                 {this.state.fetchDate ? this.state.fetchDate.map((music) => {
                    return(
                       <tr key={music.ranking} >
                          <td>{music.ranking}</td>
                          <td><img src={music.thumbnail} alt={music.thumbnailAlt}></img></td>
                          <td>{music.title}</td>
                          <td>{music.artist}</td>
                          <td>{music.album}</td>
                       </tr>     
                    )}) : ''} 
               )
               </tbody>
             </table>
        )
    }
}

export default MelonCrawling;