import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { itemCreation } from '../actions';
import ItemForm from './ItemForm';


class ItemCreate extends Component {

  componentWillMount() {

  }

  onButtonPress() {
      const { site, login, sitePassword } = this.props;
      this.props.itemCreation({ site, login, sitePassword });
  }

  render() {
    return (
        <Card>
          <ItemForm />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>
        </Card>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { site, login, sitePassword } = state.formFields;
  return { site, login, sitePassword };
};

export default connect(mapStateToProps, { itemCreation })(ItemCreate);
