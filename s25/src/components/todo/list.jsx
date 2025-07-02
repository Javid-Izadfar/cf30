const List = ({ items, onDeleteItem }) => {
  return items.length ? (
    <ol>
      {items.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ol>
  ) : (
    <small>No Task</small>
  );
};

export default List;
