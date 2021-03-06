import React, {PropTypes, Component} from 'react';
import {reduxForm} from 'redux-form';
import Joi from 'joi';
import Editable from '../../components/Editable/Editable';
import _ from 'lodash';

//TODO validate the title

@reduxForm()
export default class EditableContainer extends Component {
  static PropTypes = {
    item: PropTypes.object.isRequired,
    updateItem: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.string.isRequired,
    fields: PropTypes.object.isRequired
  };

  render() {
    const {fields} = this.props;
    const fieldName = Object.keys(fields)[0];
    const field = fields[fieldName];
    const compProps = _.pick(this.props, 'dispatch', 'item', 'updateItem','handleSubmit');
    const isEditing = this.props.active === fieldName;
    return <Editable isEditing={isEditing} {...compProps} formProps={field}/>
  }
}


