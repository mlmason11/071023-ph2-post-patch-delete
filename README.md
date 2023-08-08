# React POST, PATCH, DELETE

## Learning Goals

- Utilize the POST method for a new entry
- Add a new item to a state array with the spread operator
- Utilize the PATCH method to modify an entry
- Modify an item in a state array with the .map method
- Utilize the DELETE method to delete an entry
- Remove an item in a state array with the .filter method

## Getting Started

Fork and clone the repo. Run `npm install` and `npm run server` in the terminal
to start your json-server. In a seperate terminal run `npm start`.

## Tips and Tricks

In React we'll often be manipulating arrays through state management. There are
many ways to achieve full CRUD but we need to remember one golden rule:

```
NEVER MUTATE STATE DIRECTLY
```

This is to say, never directly change an array, always create a copy and
manipulate the copy!

We use two methods and the spread operator to create our array copies that will
replace state.

- The spread operator allows us to easily add a new item to a copy
- The .map method allows us to create a new array and change one item (or items)
- The .filter method allows us to create a new array and remove an item (or items)
