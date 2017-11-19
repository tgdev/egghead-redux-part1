import uuidv4 from 'uuid/v4';

// multiple Todos
export default [
  {
    id: uuidv4(),
    text: 'todo1',
    completed: false
  },
  {
    id: uuidv4(),
    text: 'todo2',
    completed: true
  },
  {
    id: uuidv4(),
    text: 'todo3',
    completed: true
  },
  {
    id: uuidv4(),
    text: 'todo4',
    completed: false
  }
];
