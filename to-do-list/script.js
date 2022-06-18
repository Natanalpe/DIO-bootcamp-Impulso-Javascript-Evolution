const form = document.getElementById('form')
const items = document.getElementById('items-container')
const labelValue = document.getElementsByTagName('label')

form.onsubmit = function (ev) {
    ev.preventDefault();

    const input = document.getElementById('input')
    const inputDate = document.getElementById('input-date')

    createItem(input.value, inputDate.value)
    form.reset();
    console.log(labelValue)
    console.log(labelValue)
}

function createItem(info, date) {
    const itemContainer = document.createElement('div')
    const newItem = document.createElement('input')
    const newLabel = document.createElement('label')
    const labelDate = document.createElement('label')
    const textItem = document.createTextNode(info)
    const userDate = document.createElement('span')
    const textDate = document.createTextNode(date)

    labelDate.classList.add('date')
    labelDate.setAttribute('selector', 'date')
    newItem.setAttribute('type', 'checkbox')
    newItem.setAttribute('name', info)
    newItem.setAttribute('id', info)
    newItem.appendChild(userDate)

    newLabel.setAttribute('for', info)
    newLabel.setAttribute('selector', 'text')
    newLabel.appendChild(textItem)
    labelDate.appendChild(textDate)

    itemContainer.classList.add('item-list')
    itemContainer.appendChild(newItem)
    itemContainer.appendChild(newLabel)
    itemContainer.appendChild(labelDate)

    items.appendChild(itemContainer)
}
