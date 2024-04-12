const taskForm = document.getElementById("task-form")
const taskList = document.getElementById("task-list")

taskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const taskItem = document.createElement("li")
    taskItem.classList.add('list-element-container')
    taskList.appendChild(taskItem)

    const taskText = document.createElement("input")
    taskText.setAttribute('id', 'task-input')
    taskText.setAttribute('type', 'text')
    taskText.setAttribute('class', 'input-bar')
    taskItem.appendChild(taskText)

    let deleteTaskButton = document.createElement("button")
    deleteTaskButton.setAttribute('id', 'list-delete-button')
    deleteTaskButton.setAttribute('class', 'list-element-delete-button')
    deleteTaskButton.setAttribute('type', 'button')
    taskItem.appendChild(deleteTaskButton)

    deleteTaskButton = document.querySelectorAll("#list-delete-button")
    deleteTaskButton.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentElement.remove()
        })
    })
})


const inputDeleteButton = document.getElementById("input-delete-button")

inputDeleteButton.addEventListener('click', () => {
    const taskInput = document.querySelectorAll("#task-input")
    taskInput[0].value = ''
});


const sortButton = document.getElementById("sort-list")

var taskArr = []

sortButton.addEventListener('click', () => {
    let flag = true
    if (flag === true) {
        sortButton.className = 'list-sort-type-button-increase'

        const taskInput = document.querySelectorAll("#task-input")
        taskInput.forEach((item) => {
            taskArr.push(item.value)
        })
        taskArr.sort((a, b) => a.localeCompare(b))
        flag = false
        console.log(taskArr)

    } else {
        sortButton.className = 'list-sort-type-button-decrease'
        taskArr.sort((a, b) => b.localeCompare(a))
        flag = true
        console.log(taskArr)
    }
})
