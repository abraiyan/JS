const notes = ['Go Gym', 'Study STA 102', 'Play Some Overwatch']

notes.forEach(function (item) {
    const p = document.createElement('p')
    p.textContent = item
    p.className = 'notes'
    document.querySelector('body').appendChild(p)
}) 

document.querySelector('#pressMe').addEventListener('click', function () {
    document.querySelectorAll('.notes').forEach(function (item) {
        item.remove()
    })
})