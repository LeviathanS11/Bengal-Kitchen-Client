import React from 'react';
import NavigationBar from '../navbar/NavigationBar';
import Footer from '../footer/Footer';

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
                    <i>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</i>
                </p>
            </div>
            <div>
                <p>
                    <b>How to validate React props using PropTypes?</b>
                </p>
                <p>
                    <i>Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.

                        Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if you use propTypes with your components, it helps you to avoid unexpected bugs.</i>
                </p>
            </div>
            <div>
                <p>
                    <b>What is the difference between nodejs and express js?</b>
                </p>
                <p>
                    <i>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</i>
                </p>
            </div>
            <div>
                <p>
                    <b>What is a custom hook, and why will you create a custom hook?</b>
                </p>
                <p>
                    <i>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic, you can put that code inside a custom hook and reuse it</i>
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;