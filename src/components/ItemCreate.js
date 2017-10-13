import React, { Component } from 'react';
import { Picker, Text, StyleSheet} from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { itemUpdate, itemCreation } from '../actions';

class ItemCreate extends Component {

  onButtonPress() {
      const { site, login, site_password } = this.props;

      this.props.itemCreation({ site, login, site_password });
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              onChangeText={ value => this.props.itemUpdate({ prop: 'site', value })}
              label="Site"
              placeholder="www.gmail.com"
              value={this.props.site}
            />
          </CardSection>

          <CardSection>
          <Input
            onChangeText={ value => this.props.itemUpdate({ prop: 'login', value })}
            label="Login"
            placeholder="your login name"
            value={this.props.login}
          />
          </CardSection>

          <CardSection>
          <Input
            onChangeText={ value => this.props.itemUpdate({ prop: 'site_password', value })}
            label="Password"
            placeholder="your password"
            value={this.props.site_password}
          />
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>
        </Card>
    );
  }
}

const styles = StyleSheet.create({
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
});

const mapStateToProps = (state) => {
  const { site, login, site_password } = state.itemForm;
  return { site, login, site_password };
}

export default connect(mapStateToProps,{ itemUpdate, itemCreation })(ItemCreate);
