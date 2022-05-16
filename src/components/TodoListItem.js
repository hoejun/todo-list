import React from 'react';

const TodoListItem = ({ e, dateComparison, handleClick, handleEdit, handleDelete }) => {
  return (
    <div className='list'>
      <input type='checkbox' className='listCheck' onClick={() => handleClick(e)} />
      <label
        className='listLb'
        style={{
          textDecoration: e.checked ? 'line-through' : null,
          color: dateComparison(e.date) ? null : 'red',
        }}
        onClick={() => {
          handleEdit(e);
        }}
      >
        {e.name}
        <br />
        {e.date}
      </label>
      <button className='delBtn' onClick={() => handleDelete(e.id)}>
        x
      </button>
    </div>
  );
};

export default TodoListItem;
