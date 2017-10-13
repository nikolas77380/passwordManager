import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, AuthInput, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  loginUser() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading ) {
      return <Spinner size="large" />
    }

    return (
      <Button onPress={this.loginUser.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <Text style={{color: '#fff',
                      fontWeight: '500',
                      alignSelf: 'center',
                      fontSize:26,
                      marginBottom:100
                    }}>
              Welcome to PassKiper
        </Text>
        <CardSection>
          <AuthInput
              value={this.props.email}
              label="email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <AuthInput
              value={this.props.password}
              secureTextEntry
              label="Password"
              placeholder="Password"
              onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <Text style={{color: 'red', fontSize: 20, alignSelf: 'center'}}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
          <Text style={{color: '#fff', fontWeight: '500', alignSelf: 'center', marginTop: 15}}>Forgot Password?</Text>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    user: state.auth.user,
    loading: state.auth.loading
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
