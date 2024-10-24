import React from 'react'
import Container from '../../components/modules/Container'
import { blogPost } from '../../entities/blogData'
import { Link } from 'react-router-dom'

function SinglePost(props) {
  const {title, id} = props
  return (
    <Link style={{marginTop: "10px !important"}} to={`/post/${id}`}>
      {title}
    </Link>
  )
}

export default function MainPost(){
  return (
    <Container name = {'fred'}>
      <div style={{width: "60%", paddingTop: "40px"}}>
        <div style={{fontSize: 30, fontFamily: "sans-serif", borderBottom: "0.3px solid silver", height: "50px" }}>New Post</div>

        <div style={{display: "flex", flexDirection: "column"}}>
          {
            blogPost.map((item,index)=>{
              return(
                <SinglePost key = {index} title = {item.title} id = {item.id} />
              )
            })
          }

        </div>
      </div>

    </Container>
  )
}

