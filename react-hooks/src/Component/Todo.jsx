import React, { useMemo } from 'react'
import { filterTodos } from '../data/TodoData'

function Todo(props) {
    const { todos, tab } = props

    // useMemo(() => (), [dependancy])

    let visiableTodos = useMemo(() => filterTodos(todos,tab), [todos,tab])

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <p>
                    Note: <span className="text-secondary">Filter Todos</span> is artificially slowed down
                </p>

                <ul className="list-group">
                    {
                        visiableTodos?.map((item,index) => {
                            return (
                                <li key={index} className={item.completed ? "list-group-item bg-success": "list-group-item bg-danger"}>
                                    { item.text }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Todo
