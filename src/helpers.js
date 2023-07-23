/** choose a random item. */

function choice(items) {
    let randomIdx = Math.floor(Math.random() * items.length);
    return items[randomIdx];
}

// Removes the first matching item from items, if item exists, and returns it.
// Otherwise returns undefined.
function remove(items, item) {
    const index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
    }
    return items;
}


export { choice, remove }