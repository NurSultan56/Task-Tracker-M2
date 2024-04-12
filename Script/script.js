const taskForm = document.getElementById("task-form")
const taskList = document.getElementById("task-list")

// КНОПКА ДОБАВИТЬ
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

    // УДАЛИТЬ ЭЛЕМЕНТ СПИСКА
    deleteTaskButton = document.querySelectorAll("#list-delete-button")
    deleteTaskButton.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentElement.remove()
        })
    })
})

// КНОПКА УДАЛИТЬ ПЕРВЫЙ ЭЛЕМЕНТ
var taskArr = []
const inputDeleteButton = document.getElementById("input-delete-button")
inputDeleteButton.addEventListener('click', () => {
    const taskInput = document.querySelectorAll("#task-input")
    if (taskInput.length>1) {
    taskInput.forEach((item)=>{
        taskArr.push(item.value)
    })
    taskArr.splice(0,1)
    for (let i=0; i<taskArr.length; i++){
        taskInput[i].value = taskArr[i]
    }
    document.querySelector(".list-element-container:last-child").remove()
    taskArr.splice(0,taskArr.length)
    } else {
        taskInput.forEach((item)=>{
            item.value = ''
        })
    }
});

// КНОПКА СОРТИРОВКИ (ТУДА И ОБРАТНО)
const sortButton = document.getElementById("sort-list")
var flag = true
sortButton.addEventListener('click', () => {
    if (flag === true) {
        sortButton.className = 'list-sort-type-button-increase'
        const taskInput = document.querySelectorAll("#task-input")
        taskInput.forEach((item) => {
            taskArr.push(item.value)
        })
        taskArr.sort((a, b) => a.localeCompare(b))
        for (let i=0; i<taskArr.length; i++){
            taskInput[i].value = taskArr[i]
        }
        flag = false
        taskArr.splice(0,taskArr.length)

    } else {
        sortButton.className = 'list-sort-type-button-decrease'
        const taskInput = document.querySelectorAll("#task-input")
        taskInput.forEach((item) => {
            taskArr.push(item.value)
        })
        taskArr.sort((a, b) => b.localeCompare(a))
        for (let i=0; i<taskArr.length; i++){
            taskInput[i].value = taskArr[i]
        }
        flag = true
        taskArr.splice(0,taskArr.length)
    }
})