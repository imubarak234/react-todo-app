/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React from 'react';
// import PropTypes from 'prop-types';

class TodoItems extends React.Component {
  render() {
    const next = this.props;
    return (
      <li>
        <input type="checkbox" checked={next.todo.completed}/>
        {next.todo.title}
      </li>
    );
  }
}

TodoItems.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};

export default TodoItems;
