const notes = [{
    title: 'Go Gym',
    isCompleted: false 
},
{
    title: 'Study CSE',
    isCompleted: false 
}]

notes.forEach(function (item) {
    const p = document.createElement('p')
    p.textContent = item.title
    p.className = 'notes'
    document.querySelector('body').appendChild(p)
}) 

let addItem = function (title) {
    notes.push({
        title: title,
        isCompleted: false
    })
    const p = document.createElement('p')
    p.textContent = title
    p.className = 'notes'
    document.querySelector('body').appendChild(p)
}

let textTemp = "empty"

document.querySelector('#inputField').addEventListener('change', function (e) {
    textTemp = e.target.value
})

document.querySelector('#pressMe').addEventListener('click', function () {
    addItem(textTemp)
})