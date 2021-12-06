import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApiSaveData(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
            setPosts(res.data);
        })
        .catch (err => {
            console.log(err);
        })
    },[])

    return (
        <div className="container">
            <div className="row">
                {
                    posts.map(post => (
                        <div className="col-4 mb-3">
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title" key={post.id}>{post.id}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{post.title}</h6>
                                    <p className="card-text">{post.body}</p>
                                </div>
                            </div>
                        </div>
                    ))  
                }
            </div>
        </div>
    );
}

export default ApiSaveData;