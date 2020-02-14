# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

DOM is an acronym that stands for Document Object Model. It's represented as an object comprised of HTML elements on a webpage, with various properties and methods that can be interacted with in order to modify attributes of the webpage, e.g., styling and content. The DOM has a tree structure, with all nodes descending from the `document` object, whose child nodes serve as parent nodes to elements nested further down the tree structure.

2. What is an event?

Events occur as a user interacts with a webpage, in order to notify the web browser that something has happened, so that it can respond appropriately. A browser event is represented as an object with various properties, which provide information about the event, e.g., which key was pressed, what element was clicked, and so forth. Events propagate through the DOM, so that when an event occurs on a child node, it then successively bubbles up to all of its parent nodes.

3. What is an event listener?

An event listener is represented as an object that can handle an event as it occurs, by executing a specified function through the `addEventListener` method on its target. For example, the following code will log the mouse event that occurs when the `button` element is clicked:
```
button.addEventListener("click", e => console.log(e))
```
There are many different types of events (e.g., "click", "wheel", "keydown", "load") that can be individually included as the first parameter, i.e., one event type per listener, which is the function specified in the second parameter and handles the event, followed by various options in order to control how the event is handled.

4. Why would we convert a NodeList into an Array?

A NodeList can be converted into an array in order to access array methods, such as `map`, `filter`, and `reduce`. This can be achieved by using `from` method on the `Array` prototype:
```
const arr = Array.from(nodeList)
```
The NodeList interface includes `forEach`, so that it can be used without converting to an array, and children in a NodeList can also be accessed using bracket notation, e.g., `nodeList[0]`.

5. What is a component?

A UI component is a reusable piece of code, which can create and append an HTML element dynamically with JavaScript, rather than writing an element into the HTML file. This is useful when developing applications with many similar elements, so that they do not need to be manually created and code is kept DRY. Components are often used to dynamically create HTML elements from data retrieved from an API.

### Git Set up

* [x] Fork the project into your GitHub user account
* [x] Clone the forked project into a directory on your machine
* [x] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [x] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [x] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [x] Following the instructions in the `Header/index.js` file, create the Header component. 

* [x] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [x] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [x] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [x] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [x] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
