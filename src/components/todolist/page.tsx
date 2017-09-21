import * as React from 'react';

interface Props {
  todoList: string[],
  fetchTodoList():void;
}

export class TodoListPage extends React.Component<Props,{}> {
  public componentWillMount() {
    this.props.fetchTodoList();
    //console.log(this.props.todoList);
  }

  public componentWillUnmount() {
    //console.log("a");
  }

  public toggle() {
    this.props.fetchTodoList();
    //console.log(this.props.todoList);
  }

  public render() {
    return (
      <div className="row">
        <h2>Todo List</h2>
        <button onClick={() => this.toggle()}>Hello</button>
        <ul>
        {this.props.todoList.map((index,note) =>
          <li key={note}>{note}</li>
        )}
        </ul>
      </div>
      );
  }
}
