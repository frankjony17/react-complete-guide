# React - The Complete Guide (incl Hooks, React Router, Redux)
Course: [https://www.udemy.com/course/react-the-complete-guide-incl-redux/](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Section 10: Advanced: Handling Side Effects, Using Reducers & Using the Context API (side-effects-project)
- What are "Side Effects" & Introducing useEffect.
- useEffect & Dependencies.
- What to add & Not to add as Dependencies.
- Using the useEffect Cleanup Function.
- Introducing useReducer & Reducers In General.
- Using the useReducer() Hook.
- useReducer & useEffect.
- Adding Nested Properties As Dependencies To useEffect.
- useReducer vs useState for State Management.
- Using the React Context API.
- Tapping Into Context with the useContext Hook.
- Making Context Dynamic.
- Building & Using a Custom Context Provider Component.
- React Context Limitations.
- Learning the "Rules of Hooks".
- Diving into "Forward Refs".
---

## What to add & Not to add as Dependencies
- What are "Side Effects" & Introducing useEffect.
- useEffect & Dependencies.
- What to add & Not to add as Dependencies.
--- 
In the previous lecture, we explored useEffect() dependencies.
You learned, that you should add "everything" you use in the effect function as a dependency - i.e. all state variables and functions you use in there.
That is correct, but there are a few exceptions you should be aware of:
- You <b>DON'T need to add state updating functions</b> (as we did in the last lecture with setFormIsValid): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)
- You also <b>DON'T need to add "built-in" APIs or functions</b> like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change
- You also <b>DON'T need to add variables or functions</b> you might've <b>defined OUTSIDE of your components</b> (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

<p>So long story short: You must add all "things" you use in your effect function <b>if those "things" could change because your component (or some parent component) re-rendered.</b> That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!</p>
Here's a made-up dummy example to further clarify the above-mentioned scenarios:

```javascript
import { useEffect, useState } from 'react';

let myTimer;

const MyComponent = (props) => {
    const [timerIsActive, setTimerIsActive] = useState(false);

    const { timerDuration } = props; // using destructuring to pull out specific props values

    useEffect(() => {
        if (!timerIsActive) {
            setTimerIsActive(true);
            myTimer = setTimeout(() => {
                setTimerIsActive(false);
            }, timerDuration);
        }
    }, [timerIsActive, timerDuration]);
};
```
In this example:

- <mark>timerIsActive</mark> is <b>added as a dependency</b> because it's component state that may change when the component changes (e.g. because the state was updated)
- <mark>timerDuration</mark> is <b>added as a dependency</b> because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)
- <mark>setTimerIsActive</mark> is <b>NOT added as a dependency</b> because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change
- <mark>myTimer</mark> is <b>NOT added as a dependency</b> because it's <b>not a component-internal variable</b> (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) <b>wouldn't cause the component to be re-evaluated</b>
- <mark>setTimeout</mark> is <b>NOT added as a dependency</b> because it's <b>a built-in API</b> (built-into the browser) - it's independent from React and your components, it doesn't change