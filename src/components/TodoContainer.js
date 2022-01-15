/* eslint-disable no-console */
import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = () => {
    console.log('clicked');
  }

  render() {
    const mike = this.state;
    return (
      <div>
        <Header />
        <TodosList todos={mike.todos} handleChangesProps={this.handleChange} />
      </div>
    );
  }
}
export default TodoContainer;
