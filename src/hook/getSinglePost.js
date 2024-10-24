export const singlePost = (data, postIndex)=>{
  return data.filter((item,index)=>(item.id === postIndex))
} 