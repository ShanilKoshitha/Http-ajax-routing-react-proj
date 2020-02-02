import React, { Component } from 'react';
import Axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
//stuff
class Posts extends Component{
    
    state = {
        posts: [],        
    }
    componentDidMount () {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post=>{
                return{
                    ...post,
                    author: "Shanil"
                }
            });

            this.setState({posts: updatedPosts});

            console.log(response);
        }).catch(error => {
            //this.setState({error: true});
            console.log(error);
        });
    }

    getIdOfPost = (id) =>{
        this.setState({postId: id});
    }
    render(){
        
        

        let posts = <p style={{textAlign:"center"}}>Something went Wrong</p>
        if(!this.state.error){
                posts = this.state.posts.map(post=>{
                return <Post 
                key={post.id} 
                title= {post.title} 
                author={post.author}
                clicked={()=>this.getIdOfPost(post.id)}
                />
                });
        }

        

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }

}

export default Posts;