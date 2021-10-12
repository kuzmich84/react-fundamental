import React from 'react';
import './PostItem.css'

const PostItem = (props) => {
    const {post} = props;
    const {id, title, body} = post;
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{id}. {title}</strong>
                    <div>
                        {body}
                    </div>
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>
            </div>

        </div>
    );
};

export default PostItem;