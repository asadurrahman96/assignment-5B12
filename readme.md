<!-- What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->

Single vs Multiple Elements: getElementById returns one element, whereas getElementsByClassName and querySelectorAll return collections (live and static respectively).

Selector Flexibility: querySelector and querySelectorAll allow for complex CSS selectors (like #id, .class, attribute selectors, etc.), while getElementById only accepts the id and getElementsByClassName only accepts class names.

Live vs Static: getElementsByClassName returns a live collection, which means it updates automatically when the DOM changes, while querySelectorAll returns a static NodeList that does not automatically update. getElementById returns a single element or null, so it's not applicable to the live/static concept.

<!-- How do you create and insert a new element into the DOM? -->
Create the new element using document.createElement().

Set any attributes or content (e.g., classes, text, id) to the new element.

Insert the element into the DOM using methods like appendChild(), insertBefore(), or replaceChild().


<!-- What is Event Bubbling and how does it work? -->
Event Bubbling is a concept in event handling in JavaScript where an event that is triggered on an element is propagated (or "bubbled") up to its parent elements, all the way to the root of the document.

How Event Bubbling Works:
Event Triggered: When an event occurs on an element (e.g., a button is clicked), it is first handled by the element that the event was triggered on (the target element).

Propagation: After the event handler for the target element has been executed, the event then "bubbles up" to its parent elements in the DOM tree. Each parent element can have its own event handler for the same event type.

Reaching the Root: The event continues to propagate up the DOM tree, triggering handlers for each parent element, until it reaches the top of the DOM hierarchy, typically the document or window object.


<!-- What is Event Delegation in JavaScript? Why is it useful? -->
Event Delegation is a technique in JavaScript where a single event listener is added to a parent element to manage events for its child elements. Instead of attaching individual event listeners to each child element, you can attach a single listener to the parent and use event bubbling to capture events from child elements.
How Event Delegation Works:
Attach a Single Event Listener to the Parent: Instead of adding event listeners to each child element, add one listener to the parent element.

Check the Event Target: Inside the event handler, you can use event.target to check which child element triggered the event.

Handle the Event: Based on the target, you can then perform specific actions depending on the clicked child.

<!-- What is the difference between preventDefault() and stopPropagation() methods? -->

