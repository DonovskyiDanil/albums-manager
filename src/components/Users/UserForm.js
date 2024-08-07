import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { emptyUser } from '../../constants';
import './UserForm.css';
import { useDispatch } from 'react-redux';
import { createUserAction, updateUserAction } from '../../store/actions/usersActions';
import { Formik, Form, Field } from 'formik';


function UserForm({ users }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentUser = users.find((user) => user.id === parseInt(id));

  const history = useHistory();

  const goHome = () => {
    history.push('/users');
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Field Name is required';
    }
    if (!values.email) {
      errors.email = 'Field Email is required';
    }
    return errors;
  };

  const onFormikSubmit = (values) => {
    if (!values.id) {
      dispatch(createUserAction({ ...values, id: Date.now() }));
    } else {
      dispatch(updateUserAction(values));
    }
    goHome();
  };

  const renderForm = ({ errors, resetForm }) => {
    return (
      <Form id="users-form">
        <div className="field-container">
          <label htmlFor="name">Name</label>
          <Field name="name" placeholder="Name" />
        </div>
        {errors.name && <div>{errors.name}</div>}
        <fieldset id="contact" form="users-form" className="group-container">
          <legend>Contact</legend>
          <div className="field-container">
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="Email" />
          </div>
          {errors.email && <div>{errors.email}</div>}
          <div className="field-container">
            <label htmlFor="phone">Phone</label>
            <Field name="phone" placeholder="Phone" />
          </div>
        </fieldset>
        <fieldset id="address" form="users-form" className="group-container">
          <legend>Address</legend>
          <div className="field-container">
            <label htmlFor="address.city">City</label>
            <Field name="address.city" placeholder="City" />
          </div>
          <div className="field-container">
            <label htmlFor="address.street">Street</label>
            <Field name="address.street" placeholder="Street" />
          </div>
          <div className="field-container">
            <label htmlFor="address.zipcode">Zipcode</label>
            <Field name="address.zipcode" placeholder="Zipcode" />
          </div>
        </fieldset>
        <div className="btn-group">
          <button type="submit" className="save-btn">
            Save
          </button>
          <button
            type="button"
            className="reset-btn"
            onClick={() => resetForm({ values: emptyUser })}
          >
            Reset
          </button>
          <button type="button" className="return-btn" onClick={goHome}>
            Return
          </button>
        </div>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={currentUser || emptyUser}
      onSubmit={onFormikSubmit}
      validate={validateForm}
    >
      {renderForm}
    </Formik>
  );
}

export default UserForm;
