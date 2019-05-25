import React from 'react';
import { Field, reduxForm } from 'redux-form';

// this is a redux-form style form convention

class StreamCreate extends React.Component {
  // meta property has an error property attached to it
  // console.log(meta);
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
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
  form: 'streamCreate',
  validate
})(StreamCreate); 