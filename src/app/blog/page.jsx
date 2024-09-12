import Product from '@/components/Product';
import React from 'react';

const getData = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}}); 
    if(!res.ok){
        throw new Error("Something went wrong fetching data");
    }
    return res.json();
}
 

const Blog = async () => {
    const posts = await getData();
    console.log("data: ", posts);
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                posts?.map(post => <Product key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Blog;