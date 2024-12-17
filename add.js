const groceryStack = [];

function peek() {
  return groceryStack[groceryStack.length - 1];
}

function push(item) {
  groceryStack.push(item);
  console.log("Item added to stack:", item);
  console.log("Current stack:", groceryStack);
}

function pop() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty.");
  } else {
    const item = groceryStack.pop();
    console.log("Item removed from stack:", item);
    console.log("Current stack:", groceryStack);
  }
}

// Get 5 grocery items from the user
for (let i = 0; i < 5; i++) {
  const item = prompt(`Enter grocery item ${i + 1}:`);
  push(item);
}

// Pop the last item
pop();
