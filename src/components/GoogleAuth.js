import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  // initialize the Google Oauth Process
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      // init returns a promise
      window.gapi.client.init({
        clientId: '393660155076-4uge30kuh06e9uhjgestde1n91cofekl.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        // update component level state
        this.onAuthChange(this.auth.isSignedIn.get());
        // we are listening for sign in and out changes by the user
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  // manually updates page if user signs in or out
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
         <button onClick={this.onSignOutClick} className="ui red google button">
           <i className="google icon" />
           sign out
         </button> 
        );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
            sign in with Google
        </button>
        )
      }
    }
  
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);