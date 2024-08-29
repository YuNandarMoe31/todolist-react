import React from 'react'
import Card from './Card';

const List = ({tasks, deleteTask}) => {
  return (
    <ul className='list-none w-full md:w-1/3 flex flex-col gap-y-4 justify-center'>
      <Card tasks={tasks} deleteTask={deleteTask} />
    </ul>
  )
}

export default List
