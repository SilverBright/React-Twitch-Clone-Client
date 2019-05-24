import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }; 


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
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>please sign in</div>;
    } else if (this.state.isSignedIn) {
      return <div>you are signed in</div>;
    } else {
      return <div>you are not signed in</div>;
      }
    }
  
x
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;