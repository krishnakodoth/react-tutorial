import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Posts from './Posts';
import Paging from './Paging';

const Pagination = (props) =>{
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage,setPostPerPage] = useState(5);

    useEffect(()=>{
        const fetchPost = async () =>{
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(res);
            setTimeout(()=>{
                setPosts(res.data);
                setLoading(false);
            },100);
        }
        fetchPost();
    },[]);
    console.log(posts)
    // Get current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

    console.log('currentPosts',currentPosts)
    const paginate=(number)=>{
        setCurrentPage(number)
    }
    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-3">Pagination</h2>
            <Posts posts={currentPosts} loading={loading} />
            <Paging 
                postPerPage={postPerPage} 
                totalPosts={posts.length} 
                currentPage={currentPage}
                paginate={paginate} 
                 />
        </div>
    );
};
export default Pagination;