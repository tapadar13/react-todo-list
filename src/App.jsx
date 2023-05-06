import "./styles.css";

function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="text">Add Item</label>
          <input type="text" id="text" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" name="" id="" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" name="" id="" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
export default App;
