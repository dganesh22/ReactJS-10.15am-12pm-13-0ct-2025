// to generate todo list
export function createTodos() {
    let todos = []

    for(let i=0; i < 50; i++) {
        todos.push({
            id: i,
            text: `Todo item ${i+1}`,
            completed: Math.random() > 0.5
        })
    }

    return todos;
}

// method to filter todo list
export function filterTodos(todos, tab) {
    console.log(`filtering data ${todos.length}, todos for tab = ${tab}`)
    let startTime = performance.now();
    while(performance.now() - startTime < 500) {
        // delay = donothing for 500ms
    }

    return todos.filter(function(item){
        if(tab === "all") {
            return true;
        } else if (tab === "active") {
            return item.completed;
        } else if (tab === "completed") {
            return !item.completed;
        }
    })

}