import React, {useState} from 'react';

import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";



function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'PHP', body: 'Description'},
        {id: 3, title: 'Java', body: 'Description'}
    ])

    return (
        <div className="App">
            <form>
                <input type="text" placeholder='Название поста'/>
                <input type="text" placeholder='Описание поста'/>
                <MyButton disabled>Создать пост</MyButton>
            </form>
         <PostList posts={posts} />
        </div>
    );
}

export default App;
