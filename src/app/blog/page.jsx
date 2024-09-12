import Product from '@/components/Product';
import { getPosts } from '@/lib/data';
import React from 'react';

 
const Blog = async () => { 
    const posts = await getPosts();
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                posts?.map(post => <Product key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Blog;