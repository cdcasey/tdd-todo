let todoApp;

function addTask(taskName) {
    const button = todoApp.querySelector('#add-task');
    // const todoList = document.querySelector('#todo-list');
    const inputField = todoApp.querySelector('#task-name');
    inputField.value = taskName;
    // do the thing
    button.click();
}

function getTasks() {
    const tasks = todoApp.querySelector('#todo-list').children;
    return tasks;
}

describe('TODO APP', () => {
    before('get the main todo app container', () => {
        todoApp = document.querySelector('#todo-app');
    });

    afterEach('clean up the todo list', () => {
        const todoList = todoApp.querySelector('#todo-list');
        todoList.innerHTML = '';
        const inputField = todoApp.querySelector('#task-name');
        inputField.value = '';
    });

    describe('The form', () => {
        it('should be a todo app #todo-app', () => {
            expect(todoApp).to.be.an('object');
        });

        it('should have an input field #task-name', () => {
            const inputField = todoApp.querySelector('#task-name');

            // expect(todoApp.contains(inputField)).to.be(true);
            expect(inputField).to.be.an('object');
        });

        it('should have a button #add-task', () => {
            const button = todoApp.querySelector('#add-task');
            expect(button).to.be.an('object');
            expect(button.innerText).to.contain('Add Task');
        });

        it('should have a list container #todo-list', () => {
            const todoList = todoApp.querySelector('#todo-list');
            expect(todoList).to.be.an('object');
        });
    });

    describe('A user clicking the add button #add-task', () => {
        // setup
        let button;
        before('get the main todo app container', () => {
            button = todoApp.querySelector('#add-task');
        });
        it('should add a task to the task list #todo-list', () => {
            // execute
            // click the button
            button.click();

            // check the results
            // check that the todo list children length is greater than 0
            const todoListItemsCount = getTasks().length;
            expect(todoListItemsCount).to.be.equal(1);
        });

        it('should add the correct task name', () => {
            // setup
            addTask('hello');
            // check that the last item added matches the text
            const newItemText = getTasks()[0].innerText;
            expect(newItemText).to.contain('hello');
        });

        it('should have a complete button for the task', () => {
            // setup
            addTask('a task');

            // check to see if button exists
            const firstTask = getTasks()[0];
            const deleteButton = firstTask.querySelector('.complete-task');
            expect(deleteButton).to.be.an('object');
        });
    });

    describe('A user clicking a delete button', () => {
        it('should cross out the task when the completed button is clicked', () => {
            addTask('some task');
            const theTask = getTasks()[0];
            const completeButton = theTask.querySelector('.complete-task');
            completeButton.click();
            const classList = theTask.getAttribute('class');
            expect(classList).to.contain('completed');
        });
    });
});

