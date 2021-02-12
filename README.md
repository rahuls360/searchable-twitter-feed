# Searchable Twitter Feed

Inspired by the need to find tweets I liked in the past

## Tools required

- React devtools

## How it works

- Scroll through the entire /likes feed of our account, and reach the bottom of the page
- We access the Redux State using React Devtools & browser's console
- Store it in our data.js file
- Query the data and display the results in the browser

## Key file in the Redux

copy(Object.values($reactTemp1.getState().entities.tweets.entities))

