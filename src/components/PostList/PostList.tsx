import React from 'react';
import { Post } from '../../interface/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => (
      <div
        className="post"
        key={post.id}
      >
        <h3 className="post-title">{post.title}</h3>
        <p className="post-body">{`My post : ${post.body}`}</p>
        {post.user && (
          <div className="post-userInfo">
            <UserInfo user={post.user} />
          </div>
        )}
        {post.userComments && (
          <div className="post-comments">
            <CommentList comment={post.userComments} />
          </div>
        )}
      </div>
    ))}
  </>
);