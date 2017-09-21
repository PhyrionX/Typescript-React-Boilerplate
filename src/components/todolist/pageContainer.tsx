import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { TodoListPage } from './page';
import {fetchNotes} from './actions';

const mapStateToProps = (state: State, ownProps: any) => ({
  todoList: state.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodoList: () => dispatch(fetchNotes())
})

export const TodoListPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListPage);
