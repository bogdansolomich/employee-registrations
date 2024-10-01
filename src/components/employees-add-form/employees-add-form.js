import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: '',
      salary: '',
      errorMessage: '',
    };
  }

  onChangeValue = e => {
    this.setState({
      [e.target.name]: e.target.value,
      errorMessage: '',
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.names < 3 || !this.state.salary) {
      this.setState({ errorMessage: 'Заполните данные...' });
      return;
    }
    this.props.onAdd(this.state.names, this.state.salary);
    this.setState({
      names: '',
      salary: '',
      errorMessage: '',
    });
  };

  render() {
    const { names, salary, errorMessage } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}{' '}
        {/* Отображение сообщения об ошибке */}
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
