import React from 'react';
import { Field, reduxForm } from 'redux-form';

// this is a redux-form style form convention

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  // meta property has an error property attached to it
  // console.log(meta);
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = formValues => {
    console.log(this.props)
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" /> 
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

//redux-form validation

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    // only runs if the user did not enter a title
    errors.title = 'enter a title';
  }

  if (!formValues.description) {
    errors.description = 'enter a description';
  }

  return errors;
};

export default reduxForm({ 
  form: 'streamForm',
  validate,
  // enableReinitialize: true
})(StreamForm); 