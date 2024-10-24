import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/modules/Container";
import { singlePost } from "../../hook/getSinglePost";
import { blogPost } from "../../entities/blogData";

function Postdetails(){
  const params = useParams()
  const id = params.id;
  const currentPost = singlePost(blogPost, id);
  const newPost = currentPost[0];

  // console.log(currentPost, "this is the current post");

  return(
    <Container>
      <div style={{width: "60%", paddingTop: "40px", marginBottom: 50}}>
        <div style={{fontSize: 22, fontFamily: "sans-serif", borderBottom: "0.3px solid silver", height: "50px"}}>Post Title:- <span style={{fontSize: '22px', marginLeft: 10}}>{newPost.title}</span></div>

        <div style={{display: "flex", flexDirection: "column", paddingTop: "20px"}}>
          {
            newPost.post
          }

        </div>

      </div>

    </Container>
  )
  
}

export default Postdetails