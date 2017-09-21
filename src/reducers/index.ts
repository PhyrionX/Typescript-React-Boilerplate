import { combineReducers } from 'redux';
import {todoListReducer} from './todo';
import { TodoEntity } from '../model/todoEntity';

export interface State {
  todoList: TodoEntity[];
};

export const state = combineReducers<State>({
  todoList: todoListReducer
})
