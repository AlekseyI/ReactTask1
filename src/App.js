import './styles/App.css';
import Button from "./components/UI/buttons/Button";
import React, {useState} from "react";
import PostsList from "./components/PostsList";
import PostBody from "./components/PostBody";
import PostService from "./services/PostService";

function App() {
    const [posts, setPosts] = useState(false);
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(false);

    const getPosts = async () => {
        setLoading(true);
        const request = await PostService.List();
        setLoading(false);

        if (request.length && request.length > 0) {
            setPosts(request);
        }
    };

    const showPost = (post) => {
        setPost(post);
    };

    return (
        <div className="App">
            <div className="btn-container">
                <Button onClick={() => getPosts()}>Get posts</Button>
            </div>
            {
                loading && <h1 className="textCenter">Loading...</h1>
            }

            {
                !loading
                && (posts.length > 0 &&
                    <div className="parent-container">
                        <PostsList posts={posts} showPost={showPost}/>
                        <PostBody post={post}/>
                    </div>
                    || posts && posts.length === 0
                    && <h1>Posts not found</h1>
                    || !posts && '')
            }
        </div>
    );
}

export default App;
