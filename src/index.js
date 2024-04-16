import LinkedList from "./linked-list.js";

const myList = LinkedList();

myList.append(2);
myList.prepend(1);
myList.append(3);
myList.append(4);

console.log(`toString(): ${myList.toString()}`);
console.log(`Number of nodes: ${myList.size()}`);
console.log(`First node: ${myList.head()}`);
console.log(`Last node: ${myList.tail()}`);
console.log(`Node at index = 2: ${myList.at(2)}`);

myList.pop();
console.log(`List after pop(): ${myList.toString()}`);

console.log(`List contains 10: ${myList.contains(10)}`);
console.log(`List contains 3: ${myList.contains(3)}`);
console.log(`The index of the node containing 2: ${myList.find(2)}`);
console.log(`The index of the node containing 11: ${myList.find(11)}`);