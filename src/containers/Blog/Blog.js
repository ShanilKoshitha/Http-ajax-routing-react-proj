import React, { Component } from 'react';

import './Blog.css';
//import Axios from 'axios';
import Posts from './Posts/Posts';
class Blog extends Component {

    render () {
        return ( 
          
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">SomethingElse</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts/>         
            
            </div>
            
        );
    }
}

export default Blog;