- [ ] Why would you use class component over function components (removing hooks from the question)?

    If you remove React hooks from the equation, you would want to use class components anytime you need to manipulate state or tap into the component lifecycle. Before hooks, function components were only presentational components, meaning they simply rendered a UI to the DOM but did not provide any more functionality or interactivity. 

    By extending the React base component, class components are granted access to lifecycle methods and the ability to manipulate state. And this ultimately gets to the heart of React, as it allows for “reactivity” to user interactions and gives a web app its behavior.  

- [ ] Name three lifecycle methods and their purposes.

    1) Constructor Method – initializes the class component with the data/state and methods it needs “before” it gets mounted to the DOM

    2) componentDidMount – will be invoked only once ‘after’ the initial render...typically used to fetch initial data from an API

    3) componentDidUpdate – updates DOM in response to some change in props or state

- [ ] What is the purpose of a custom hook?

    Custom hooks let us apply non-visual and stateful logic throughout components and therefore help us write DRY-er code. 

- [ ] Why is it important to test our apps?

    There are a number of reasons to test our apps, including but not limited to: 
    - Catching bugs earlier
    - Increasing our trust in our code
    - Causing us to think about edge cases sooner
    - Contributing to documentation for our code
    - Creating a safety net when making implementation changes or refactoring
    - Reducing the need for expensive and time-consuming manual tests
    - Making code bases easier to maintain
