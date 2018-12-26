let total = 0;
export function dropBox() {
    total++;
    const dragDropBox = document.createElement('div');
    const dropGridDiv = document.querySelector('.drop-grid');
    dragDropBox.setAttribute('class', 'drop-cell');
    dragDropBox.setAttribute('id', total);
    dragDropBox.setAttribute('draggable', 'true');
    dragDropBox.getAttribute('class', 'drop-cell');
    dragDropBox.getAttribute('draggable', 'true');
    dragDropBox.getAttribute('id', total);
    dropGridDiv.appendChild(dragDropBox);
    const dragDropHeader = document.createElement('header');
    dragDropHeader.setAttribute('id', total);
    dragDropHeader.setAttribute('contenteditable', 'true');
    dragDropHeader.setAttribute('draggable', 'true');
    dragDropHeader.getAttribute('contenteditable', 'true');
    dragDropHeader.getAttribute('draggable', 'true');
    dragDropHeader.getAttribute('id', total);
    dragDropBox.appendChild(dragDropHeader);
    const headerList = document.querySelectorAll('header');
    for (let i = 0; i < headerList.length; i++) {
        headerList[i].innerHTML = `Header ${i + 1}`;
    }
    const editablePara = document.createElement('p');
    editablePara.setAttribute('contenteditable', 'true');
    editablePara.setAttribute('draggable', 'true');
    editablePara.setAttribute('id', total);
    editablePara.setAttribute('class', 'content');
    editablePara.getAttribute('contenteditable', 'true');
    editablePara.getAttribute('class', 'content');
    editablePara.getAttribute('id', total);
    dragDropBox.appendChild(editablePara);
    const paraList = document.querySelectorAll('p');
    for (let i = 0; i < paraList.length; i++) {
        paraList[i].innerHTML = `Content ${i + 1}`;
    }
    const dragDropFooter = document.createElement('footer');
    dragDropFooter.setAttribute('id', total);
    dragDropFooter.setAttribute('class', 'drag-footer');
    dragDropFooter.setAttribute('draggable', 'true');
    dragDropFooter.setAttribute('contenteditable', 'true');
    dragDropFooter.getAttribute('contenteditable', 'true');
    dragDropFooter.getAttribute('draggable', 'true');
    dragDropFooter.getAttribute('class', 'drag-footer');
    dragDropBox.appendChild(dragDropFooter);
    const footerList = document.querySelectorAll('.drop-cell footer');
    for (let i = 0; i < footerList.length; i++) {
        footerList[i].innerHTML = `Footer ${i +1}`;
    }
}