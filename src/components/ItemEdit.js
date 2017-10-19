import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { itemUpdate, itemSaving } from '../actions';
import { Card, CardSection, Button } from './common';

class ItemEdit extends Component {
  componentWillMount() {
    _.each(this.props.navigationState.site, (value, prop) => {
      this.props.itemUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { site, login, sitePassword } = this.props;
    this.props.itemSaving({ site, login, sitePassword, uid: this.props.navigationState.site.uid });
  }

  render() {
    return (
        <Card>
          <ItemForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Update
            </Button>
          </CardSection>
        </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { site, login, sitePassword } = state.formFields;

  return { site, login, sitePassword };
};

export default connect(mapStateToProps, { itemUpdate, itemSaving })(ItemEdit);
