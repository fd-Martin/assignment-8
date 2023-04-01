import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';

//product========

const BlogArticle = (props) => {
    // console.log(props);
    const { authorName, blogTitle, img, authorImage, readTime, publishDate } = props.blog;
    const addToBookmark=props.addToBookmark;


const addToTime=(blog)=>{
    console.log(blog);
}

    return (
        <div>
            <div className="card mb-3">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex mb-3">
                        <div className="p-2">
                            <img src={authorImage} alt="" width="80" height="80" className='rounded-circle' />
                        </div>
                        <div className="p-2">
                            <h5 className="card-title">{authorName}</h5>
                            <h6 className="card-title">{publishDate}</h6>
                        </div>
                        <div className="ms-auto p-2 d-flex align-items-start">
                            <h6 className='mx-3'>{readTime} min read time</h6>

                            
                            <a  onClick={ ()=> addToBookmark(props.blog)}
                                className='text-decoration-none fs-4 text-black'>
                                <FontAwesomeIcon icon={faBookBookmark} /></a>
                             


                        </div>
                    </div>

                    <h1 className="card-text">{blogTitle}</h1>
                    <p>
                        <a   onClick={ ()=> addToTime(props.blog)}className=" bg-transparent">Mark as Read</a>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default BlogArticle;