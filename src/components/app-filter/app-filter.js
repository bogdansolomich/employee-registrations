import './app-filter.css';

const AppFilter = props => {
  const buttonsDate = [
    { names: 'All', label: 'Все сотрудники' },
    { names: 'rise', label: 'На повышение' },
    { names: 'moreThen1000', label: 'З/П больше 1000$' },
  ];

  const buttons = buttonsDate.map(({ names, label }) => {
    const active = props.filter === names;
    const clazz = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={names}
        onClick={() => props.onFilterSelect(names)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
