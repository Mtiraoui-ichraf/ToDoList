import { ADD, DELETE, UPDATE } from "./type";
import { v4 as uuidv4 } from 'uuid';


var Task = [
  {
    id: uuidv4(),
    title:'first task',
    done: false,
  },
];

export const TasksReducer = (state = Task, action) => {
  switch (action.type) {
    case ADD:
      return [...state, { id:uuidv4(), title:action.payload }];

    case UPDATE:

      return state.map(e => {
        if (e.id === action.payload.id) {
          return {...e, title: action.payload.updatedtask
          }}
          
        else
          return e 
      })
    
      
      
      case DELETE:
        return state.filter(e=>e.id !== action.payload);
        
        default:
      return state;
  }
};

export default TasksReducer;

/*     return state.map((Todo) => {
      if (Todo.id === action.paylood.id) {
        return { ...Todo, ...action.payload };
      } else {
        return Todo;
      }
    }); */