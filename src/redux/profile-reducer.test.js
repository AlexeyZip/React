const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");
import React from 'react';
import ReactDom from "react-dom";

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 2 }
    ],
};

it(`length of posts should be incremented`, () => {
    //1.test data
    let action = addPostActionCreator("Hello IT")
   
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect (newState.posts[2].message).toBe("Hello IT");
});

it(`after deleting length of message should be decrement`, () => {
    //1.test data
    let action = deletePost(1);
   
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect (newState.posts.length).toBe(1);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1.test data
    let action = deletePost(1000);
   
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect (newState.posts.length).toBe(2);
});
