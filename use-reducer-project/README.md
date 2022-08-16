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
- Using the useReducer() Hook.
- useReducer & useEffect.
- Adding Nested Properties As Dependencies To useEffect.
- useReducer vs useState for State Management.
---

### Adding Nested Properties As Dependencies To useEffect
In the previous lecture, we used object destructuring to add object properties as dependencies to <mark>useEffect()</mark>.
```javascript
const { someProperty } = someObject;
useEffect(() => {
  // code that only uses someProperty ...
}, [someProperty]);
```
<p>
This is a <b>very common pattern and approach</b>>, which is why I typically use it and why I show it here (I will keep on using it throughout the course).
</p>
<p>
I just want to point out, that they <b>key thing is NOT that we use destructuring</b> but that we pass specific properties instead of the entire object as a dependency.
</p>
We could also write this code and it would <b>work in the same way</b>.

```javascript
useEffect(() => {
  // code that only uses someProperty ...
}, [someObject.someProperty]);
```
This works just fine as well!

But you should **avoid** this code:
```javascript
useEffect(() => {
  // code that only uses someProperty ...
}, [someObject]);
```
Why?
Because now the **effect function would re-run whenever ANY property** of <mark>someObject</mark> is changes - not just the one property (<mark>someProperty</mark> in the above example) our effect might depend on.
---

### Section 10: Advanced: Handling Side Effects, Using Reducers & Using the Context API (side-effects-project)
- Introducing React Context (Context API).
- Using the React Context API.;
- Tapping Into Context with the useContext Hook.
- Making Context Dynamic.
- Building & Using a Custom Context Provider Component.
- React Context Limitations.
- Learning the "Rules of Hooks".
- Diving into "Forward Refs".

