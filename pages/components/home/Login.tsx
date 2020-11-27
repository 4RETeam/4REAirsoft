import { Field, Formik } from 'formik';
import React from 'react';
import { InputField } from '../fields/InputField';
// import { loginMutation } from "../../graphql/user/login";
// import { useMutation } from '@apollo/react-hooks';
const Login = () => {
  // const [login] = useMutation(loginMutation);

  return (
    <div>
                <h1 className="text-center main-heading">Login</h1>

      <Formik
        key="login"
        onSubmit={async (data, { setErrors }) => {
          try {
            fetch('http://localhost:3000/users/login', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify({
                email: data.email,
                password: data.password,
              }),
            })
              .then(result => result.json())
              .then(info => {
                localStorage.setItem('access_token', info.access_token);
              });
          } catch (error) {
            console.log(error);
            const errors: { [key: string]: string } = {};

            setErrors(errors);
          }
        }}
        initialValues={{
          email: '',
          password: '',
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email" placeholder="email" component={InputField} />
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

export default Login;
