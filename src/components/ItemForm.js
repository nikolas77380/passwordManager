import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { itemUpdate } from '../actions';
import { CardSection, Input } from './common';

class ItemForm extends Component {
    render() {
      return (
        <View>
          <CardSection>
            <Input
              onChangeText={value => this.props.itemUpdate({ prop: 'site', value })}
              label="Site"
              placeholder="www.gmail.com"
              value={this.props.site}
            />
          </CardSection>

          <CardSection>
          <Input
            onChangeText={value => this.props.itemUpdate({ prop: 'login', value })}
            label="Login"
            placeholder="your login name"
            value={this.props.login}
          />
          </CardSection>

          <CardSection>
          <Input
            onChangeText={value => this.props.itemUpdate({ prop: 'sitePassword', value })}
            label="Password"
            placeholder="your password"
            value={this.props.sitePassword}
          />
          </CardSection>
        </View>
      );
    }
}

const mapStateToProps = (state) => {
  const { site, login, sitePassword } = state.formFields;
  return { site, login, sitePassword };
};

export default connect(mapStateToProps, { itemUpdate })(ItemForm);
