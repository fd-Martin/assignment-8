import React from 'react';

const QA = () => {
    return (
        <div>
            <div className="border container bg-black" >
                <div className=" p-3 text-white rounded">
                    <h2>what is the difference between props and state?</h2>
                            <p>React is an open-source JavaScript library that offers a visual overview of the JavaScript architecture for conventional MVC. React promises programmers a model in which substrates cannot directly influence enclosing components—data are downstream, data changes in HTML are efficiently modified, and the DOM is abstracted to boost performance using Virtual DOM.

                                How can we access data from the previous component if the data is just being flowed from component to component? The answer is props. React uses data transmission props that we need to transfer to various components.

                                The difference comes in which component the data are owned. The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.

                                A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.</p>

                            <h2>How useState works?</h2>
                            <p>The React useState Hook allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>

                            <h2>What does useEffect work instead of DataLoad?</h2>
                            <ol>
                                <li>Running once on mount: fetch API data</li>
                                <li>Running on state change: validating input field</li>
                                <li>Running on state change: live filtering</li>
                                <li>Running on state change: trigger animation on new array value</li>
                                <li>Running on props change: update paragraph list on fetched API data update</li>
                                <li>Running on props change: updating fetched API data to get BTC updated price</li>
                            </ol>

                            <h2>How dose react work?</h2>
                            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                </div>
                            
                        </div>
        </div>
    );
};

export default QA;