import { Field, Formik } from "formik";
import React from 'react';
import { InputField } from '../fields/InputField';
// import { registerMutation } from "../../graphql/user/register";
// import { useMutation } from '@apollo/react-hooks';
const Register = () => {
  // const [register] = useMutation(registerMutation);

  return (
    <div>
      <h1 className='text-center main-heading'>Register</h1>
      <Formik
            key="register"
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={async (data, { setErrors }) => {
                    
                }}
                initialValues={{
                    email: "",
                    firstName: "",
                    lastName: "",
                    password: ""
                }}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="firstName"
                            placeholder="firstName"
                            component={InputField}
                        />
                        <Field
                            name="lastName"
                            placeholder="lastName"
                            component={InputField}
                        />
                        <Field
                            name="email"
                            placeholder="email"
                            component={InputField}
                        />
                        <Field
                            name="password"
                            placeholder="password"
                            type="password"
                            component={InputField}
                        />
                        <button type="submit">submit</button>
                    </form>
                )}
            </Formik> 
    </div>
  );
};
export default Register;
