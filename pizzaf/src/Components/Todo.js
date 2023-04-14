import React, { useState } from 'react';

const Todo = () => {
  // Sample array of data
  const [data, setData] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ]);

  // Function to handle item deletion
  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <h1>My List</h1>
      <ul>
        {/* Using map function to iterate over data */}
        {data.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;