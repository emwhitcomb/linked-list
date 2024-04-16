import Node from "./linked-node.js";

function LinkedList() {
    return {
        headNode: null,

        append(value) {
            if (this.headNode == null) {
                this.headNode = Node(value);
            }
            else {
                let current = this.headNode;
                while (current.next != null) {
                    current = current.next;
                }
                current.next = Node(value); 
            }
        },
        
        prepend(value) {
            this.headNode = Node(value, this.headNode);
        },

        size() {
            let count = 0;
            let current = this.headNode;

            while (current != null) {
                count++;
                current = current.next;
            }

            return count;
        },

        head() {
            return this.headNode.value;
        },

        tail() {
            let current = this.headNode;
            while (current.next != null) {
                current = current.next;
            }
            return current.value;
        },

        at(index) {
            let current = this.headNode;

            for (let i = 0; i < index; i++) {
                current = current.next;
                if (current == null) {
                    return "ERROR: Index greater than list length."
                }
            }
            return current.value;
        },

        pop() {
            let current = this.headNode;
            let previous;

            while (current.next != null) {
                previous = current;
                current = current.next;
            }

            previous.next = null;
        },

        contains(value) {
            let current = this.headNode;
            while (current != null) {
                if (current.value == value) {
                    return true;
                }
                else {
                    current = current.next;
                }
            }
            return false;
        },

        find (value) {
            let current = this.headNode;
            let count = 0;
            while (current != null) {
                if (current.value == value) {
                    return count;
                }
                else {
                    current = current.next;
                    count++;
                }
            }
            return "The value does not exist in the list";
        },

        toString() {
            let listString = '';
            let current = this.headNode;

            while (current != null) {
                listString += `(${current.value}) -> `;
                current = current.next;
            }
            listString += current;

            return listString;
        },
    };

}

export default LinkedList;