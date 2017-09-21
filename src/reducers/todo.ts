import {actionTypes} from '../constants/actions';
import {TodoEntity} from '../model/todoEntity';

/*export interface TodoListState {
  todoList: string[];
  selected: number;
}

const newState = (): TodoListState => ({
  todoList: [""],
  selected: -1,
});*/

export const todoListReducer = (state: TodoEntity[] = [], action) => {
    switch (action.type) {
      /*case actionTypes.ADD:
        return handleAddItem(state, action.payload);*/
      case actionTypes.FETCH:
        return action.payload;
    }

    return state;
}

const handleFectchTodo = (state: TodoEntity[], payload: TodoEntity[]) => {
  return payload;
};

/*const handleAddItem = (state: TodoListState, payload): TodoListState => ({
  ...state,
  todoList: [...state.todoList, payload]
})

const fetchItems = (state: TodoListState): TodoListState => ({
  ...state,
  todoList: ["Hola", "Adew"]
})*/
