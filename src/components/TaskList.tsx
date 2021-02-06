// @flow 
import * as React from 'react';
import { Task } from '../App';
interface ItemListProps {
    tasks: Task[];
};

export const ItemList: React.FC<ItemListProps> = props => {
    const {tasks} = props;
    return (
        <ul>
        {tasks.map(task => (
          <li>
            {task.name} - {task.description}
          </li>
        ))}
      </ul>
    );
};