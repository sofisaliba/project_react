function List(props) {
    return (
      <div className="todoapp stack-large">
        <h1>My List Of The Words</h1>
        <form>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              Which words you want to study?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> words</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>active</span>
            <span className="visually-hidden"> words</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>completed</span>
            <span className="visually-hidden"> words</span>
          </button>
        </div>
        <h2 id="list-heading">3 words remaining</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading">
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-0" type="checkbox" defaultChecked />
              <label className="todo-label" htmlFor="todo-0">
                Consciousness
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit 
              </button>
              <button type="button" className="btn btn__danger">
                Delete 
              </button>
            </div>
          </li>
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-1" type="checkbox" />
              <label className="todo-label" htmlFor="todo-1">
                Conundrum
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit 
              </button>
              <button type="button" className="btn btn__danger">
                Delete 
              </button>
            </div>
          </li>
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-2" type="checkbox" />
              <label className="todo-label" htmlFor="todo-2">
                Ephemeral
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit 
              </button>
              <button type="button" className="btn btn__danger">
                Delete 
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  
  export default List;
  