# web-dev-assignment-05
This is web development assignment 05 repository with HTML, Tailwind CSS, Daisy UI and JavaScript.  

## Answer to the questions part

### Q-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<table border=1 width="100%" cellpadding="50">
 <tr>
    <td>**getElementById**</td>
    <td>**getElementsByClassName**</td>
    <td>**querySelector**</td>
    <td>**querySelectorAll**</td>
 </tr>
  <tr>
    <td>We can select a single or specific element by using getElementById</td>
    <td>We can select all elements that have particular class name by using getElementsByClassName</td>
    <td>We can select the first element of a specific CSS selector like class (same name first class element) by using querySelector</td>
    <td>We can select all elements which are match with a specific CSS selector querySelectorAll</td>
 </tr>
 <tr>
    <td>Return single element. If not found the ID, return null</td>
    <td>Return the live elements with the particular class</td>
    <td>Return single element. If not found the element, return null</td>
    <td>Return the static NodeList elements of particular CSS selector</td>
 </tr>
</table>


### Q-2: How do you create and insert a new element into the DOM?

We can create and insert a new element into a dom which we already created to build this website.

First we have to create an element by using document.createElement() and pass the tag name. In our case we create the below one:

const historyDiv = document.createElement('div');
historyDiv.classList.add('call-history', 'rounded-xl', 'bg-[#fafafa]', 'mt-2', 'flex', 'justify-between', 'items-center', 'p-4');

Then we have to add content by using innerHTML or innerText and set the attributes by ID or class name.
In our case we do the below one:
historyDiv.innerHTML = `
                    <div>
                        <h2 class="text-lg md:text-xl font-semibold">${serviceName}</h2>
                        <h2 class="text-gray-500 text-lg">${serviceNumber}</h2>
                    </div>
                    <h2 class="text-sm md:text-xl font-semibold">${currentTime}</h2>
                `;

Finally Append it to the DOM like in our case: 
callHistoryContainer.appendChild(historyDiv);


### Q-3: What is Event Bubbling and how does it work?

Event Bubbling is a process by which we can triggered on a specific or targeted HTML element capturing step by step to its immediate chield element. After reaching its targeted element, then bubbling up to its immediate parent element. This process continues until it reaches the document object or the root of the dom. It maintains event propagation model consists of three phases: **capturing**, **target** and **bubbing**.

In the below example: if we click Banana Juice, it first trigger 'item-2', then trigger its parent 'fruit-list' and finally trigger 'list-container' using event bubbling machanism.  

<section>
        <h1 style="text-align: center;">Explore Event Bubble</h1>
        <div id="list-container">
            <h3 style="text-align: center;">Explore List of Things</h3>
            <br>
            <ol id="fruit-list">
                <li id="item-1">Apple Juice</li>
                <li id="item-2">Banana Juice</li>
                <li id="item-3">Orange Juice</li>
                <li id="item-4">Mango Juice</li>
                <li id="item-5">Licchi Juice</li>
                <li id="item-6">Black Berry Juice</li> 
            </ol>
        </div>
</section>

<script>
	const item2 = document.getElementById('item-2');
	item2.addEventListener('click', function(event){
    		console.log('Banana clicked');
	});
	const fruitList = document.getElementById('fruit-list');
	fruitList.addEventListener('click', function(){
    		console.log('ol is clicked')
	});

	const listContainer = document.getElementById('list-container');
	listContainer.addEventListener('click', function(){
    		console.log('list-container is clicked')
	});
</script>

### Q-4: What is Event Delegation in JavaScript? Why is it useful?

**Event delegation**
Event delegation is a process by which a single event is added dynamically to it's parent element without making multiple listeners.
As we know event propagation model consists of three phases:
1. Capturing 
2. Target
3. Bubbling

By default, Event delegation uses the bubbling phase to perform events.
In the below example, we can add many list just clicking Add New Items button and delete by clicking any list item.
This is happening without adding multiple listeners. Here we just take the advantage of event bubbling where the elements are add or delete dynamically after some initial event listeners are attached.

<section>
        <h1 style="text-align: center;">Explore the concept of event delegates</h1>
        <div>
            <ol id="item-list"> 
                <li class="item">My Awesome item - 1</li>
                <li class="item">My Awesome item - 2</li>
                <li class="item">My Awesome item - 3</li>
                <li class="item">My Awesome item - 4</li>
                <li class="item">My Awesome item - 5</li>
                <li class="item">My Awesome item - 6</li>
            </ol>
            <br><br>
            <button id="add-item">Add New Items</button>
        </div>
</section>

<script>
    const itemList = document.getElementById('item-list');
    itemList.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    });

    const addItem = document.getElementById('add-item');
    addItem.addEventListener('click', function(){
        const oltoAdded = document.getElementById('item-list');

        const litoAdded = document.createElement('li');
        litoAdded.classList.add('item');
        litoAdded.innerText = 'New item 1';

        oltoAdded.appendChild(litoAdded);
    });
</script>

**Why Event delegation is useful?**
Improve Performance: Instead of attaching multiple event listeners, we can make some initial event listeners which consume less memory and processing time.
Make Dynamic: To make dinamically add or remove elements, Event delegation play a awesome role.


### Q-5: What is the difference between preventDefault() and stopPropagation() methods?

<table border=1 width="100%" cellpadding="50">
 <tr>
    <td>**preventDefault()**</td>
    <td>**stopPropagation()**</td>
 </tr>
  <tr>
    <td>preventDefault() method prevents the default behavior which is occurring in an event. Like form submitting when a submit button is clicked.</td>
    <td>stopPropagation() method just stop any event from propagating its child or parent elements in the DOM.</td>
 </tr>
 <tr>
    <td>It can not stop any event from occurring the propagation (bubbling or capturing) through the DOM hierarchy.</td>
    <td>It can not prevent the default action of any event from occurring.</td>
 </tr>
  <tr>
    <td>
        Example: 
        const btnAddMoney = document.getElementById('btn-add-money');
        btnAddMoney.addEventListener('click', function(event){
            event.preventDefault();
        });
    </td>
    <td>
        Example:
        const item2 = document.getElementById('item-2');
        item2.addEventListener('click', function(event){
            console.log('item-2 clicked');
            event.stopPropagation();
        });
    </td>
 </tr>
</table>