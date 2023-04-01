import React, { useEffect, useState } from 'react';
import BlogArticle from '../Blog-article/BlogArticle';
import BlogCount from '../BlogCount/BlogCount';

///shop===================

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookMarkCount, setBookMarkCount] = useState([]);

    useEffect(() => {
        fetch('datas.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const addToBookmark = (blog) => {
        // console.log(blog.authorName);
        const newBookMarkCount = [...bookMarkCount, blog];
        setBookMarkCount(newBookMarkCount);
        console.log(newBookMarkCount);
    }

    return (
        <div className='blog-container'>
            <div className="container">
                <div className="row  ">
                    <div className="blog-article col-12 col-sm-8  border">
                        {
                            blogs.map(blog => <BlogArticle
                                key={blog.id}
                                blog={blog}
                                addToBookmark={addToBookmark}
                            ></BlogArticle>)
                        }
                    </div>
                    <div className="blog-count col-12 col-sm-4   border">
                        <div className="spend">
                            <div className="blogView  bg-info p-4 mb-4">
                            </div>
                        </div>
                        <div className="blogView  position-sticky top-0 end-0  bg-warning p-4 my-3 border">
                            <p>Bookmarked Blogs:{bookMarkCount.length}</p>
                            <div className="blogView ">
                                {
                                    bookMarkCount.map(bookMarkCountTitle => <div
                                        key="bookMarkCountTitle.{id}"
                                        className="blogView  bg-white p-4 my-3 border"
                                    >{bookMarkCountTitle.blogTitle}</div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;