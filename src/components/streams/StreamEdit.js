import _ from 'lodash';
import React from 'react';
import { fetchStream, editStream } from '../../actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component  {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    // console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit A Stream</h3>
        <StreamForm 
        // initialValues is a special redux-form helper function 
          initialValues={_.pick(this.props.stream, 'title', 'description')} 
          onSubmit={this.OnSubmit} 
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};



export default connect(mapStateToProps, {fetchStream, editStream })(StreamEdit);