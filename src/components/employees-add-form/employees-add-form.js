import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: '',
      salary: '',
    };
  }

  onChangeValue = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.names, this.state.salary);
    this.setState({
      names: '',
      salary: '',
    });
  };

  render() {
    const { names, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="names"
            value={names}
            onChange={this.onChangeValue}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onChangeValue}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
