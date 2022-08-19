import React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";

/*
  TODO: Change the below to be a link that goes to the specific post route using the post id.
  //DONE!! See line 13.
*/

export const PostLink = ({ post }) => {
  const { path, url } = useRouteMatch();
  return (
    <li className="list-group-item text-truncate">
      <Link to={`${url}/${post.id}`}>{post.title}</Link>
    </li>
  );
};

export default PostLink;
