# Readable

This Udacity homework project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Run

Clone the repo to your local machine. Install dependencies with command `yarn` (or `npm i`) then start app with `yarn start` (or `npm start`). You will need the dummy backend server from [here](https://github.com/udacity/reactnd-project-readable-starter) running on port 5001.

## Test

Run `yarn test a` or `npm test a` to execute tests. I wrote only the most basic unit tests for components. I didn't get around to unit tests for reducers, action creators, etc. but they were not required for the homework.

## One Small Divergence from Rubric

- The rubric states:
>Listed posts are displayed with title, author, number of comments, current score, __and a voting mechanism to upvote or downvote the post__. Posts should have buttons or links for editing or deleting that post.

I included the voting mechanism only on the post detail view. This is because I think it makes sense to only allow voting on a post you have opened and read. It would be trivial to change this, but I think it is a better design.

