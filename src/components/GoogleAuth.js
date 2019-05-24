import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }; 

  // this will get moved into redux later


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
        // we are listening for sign in and out changes by the user
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  // manually updates page if user signs in or out
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
         <button className="ui red google button">
           <i className="google icon" />
           sign out
         </button> 
        );
    } else {
      return (
        <button className="ui red google button">
          <i className="google icon" />
            sign in with Google
        </button>
      )
      }
    }
  
x
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;