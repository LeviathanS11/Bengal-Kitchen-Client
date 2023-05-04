import React from 'react';
import NavigationBar from '../navbar/NavigationBar';

const Blog = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <i><b>Question and Answer.</b></i>
            <div>
                <p>
                    <b>What is the differences between uncontrolled and controlled components?</b>
                </p>
                <p>
                    <i></i>
                </p>
            </div>
            <div>
                <p>
                    <b>How to validate React props using PropTypes?</b>
                </p>
                <p>
                    <i></i>
                </p>
            </div>
            <div>
                <p>
                    <b>What is the difference between nodejs and express js?</b>
                </p>
                <p>
                    <i></i>
                </p>
            </div>
            <div>
                <p>
                    <b>What is a custom hook, and why will you create a custom hook?</b>
                </p>
                <p>
                    <i></i>
                </p>
            </div>
        </div>
    );
};

export default Blog;