let dragSrcEl = null;
const cols = document.querySelectorAll('.drop-grid .drop-cell');

export function handleDrop(e) {
    // this / e.target is current target element.
    if (e.stopPropagation) {
        // stops the browser from redirecting.
        e.stopPropagation();
    }
    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != e.target) {
        // Set the source column's HTML to the HTML of the column we dropped on.
        [dragSrcEl.innerHTML, e.target.innerHTML] = [e.target.innerHTML, dragSrcEl.innerHTML];
        e.target.innerHTML = e.DataTransfer.getData('text/html');
    }
    return false;
}

export function handleDragStart(e) {
    // this/e.target is source node 
    dragSrcEl = e.target;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
}

export function handleDragEnd(e) {
    // this/e.target is the source node.
    Array.from(cols).forEach(col => col.classList.remove('over'));
}

export function handleDragOver(e) {
    if (e.preventDefault) {
        // Necessary. Allows us to drop.
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

export function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
}

export function handleDragLeave(e) {
    // this / e.target is previous target element.
    this.classList.remove('over');
}