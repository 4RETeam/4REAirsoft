import { Accordion, AccordionItem } from '@paljs/ui';
import { CategoryDocument } from 'apps/nestgqltsveikals/src/categories/schemas/categories.schema';
import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import { InputField } from '../../fields/InputField';

const selectCategories = (props: CategoryDocument[]) => {
  const rows = [];

  for (let i = 0; i < props.length; i++) {
    // console.log(props);
    rows.push(
      <option key={props[i]._id} value={props[i].name}>{props[i].name}</option>
    );
  }
  return rows;
}


const AddProductForm = props => {
  const [fieldValue, setFieldValue] = useState({});

  return (
    <div>
      <Formik
        key="addprod"
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (data, { setErrors }) => {
          try {
            let test: HTMLFormElement = document.querySelector('#prodAdd');
            
            let formData = new FormData(test);
            // console.log(formData.get('file'));

            // test.append('name', data.name);
            // test.append('description', data.description);
            // test.append('price', data.price);
            // test.append('categoryName', data.categoryName);
            // test.append('isSpecialOffer', data.isSpecialOffer.toString());
            // test.append('file', fieldValue);
            
            // test.append('file', data.file);
            
            // let newData = {...data, file: fieldValue};
            // console.log(data);
            // console.log('-----------------');
            // console.log(test);


            // console.log(data);
            // let newData = {
            //   price: 123,
            //   description: '',
            //   name: '',
            //   isSpecialOffer: true,
            //   categoryName: '',
            //   file: fieldValue
            // };
            // console.log(fieldValue);
            // newData.price = parseFloat(data.price);
            // newData.description = data.description;
            // newData.name = data.name;
            // newData.categoryName = data.category;
            // newData.file = fieldValue;
            fetch('http://localhost:3000/products', {
              method: 'POST',
              headers: {
                // 'Content-type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('access_token')
              },
              body: formData
            }).then(result => result.json())
            .then(info => {
              console.log(info);
            });
              
          } catch (err) {
            const errors: {[key: string]: string } = {};
            err.graphQLErrors[0].extensions.exception.validationErrors.forEach(
              (validationErr: any) => {
        Object.values(validationErr.constraints).forEach(
          (message: any) => {
            
            errors[validationErr.property] = message;
          },
        );
              },
            );

            setErrors(errors);
          }
        }}
        initialValues={{
        name: '',
        price: '',
        description: '',
        fileName: '',
        categoryName: '',
        isSpecialOffer:false
      }}
      >
      {({ handleSubmit }) => (
          <Accordion>
            <AccordionItem uniqueKey={1} title="AddNewProduct">
        <form id='prodAdd' onSubmit={handleSubmit}>
        <h3>New Product Form</h3>
          <Field name="name" placeholder="name" component={InputField} />
          
          <Field
            name="price"
            placeholder="price"
            component={InputField}
            type="number"
          />
          <Field
            name="description"
            placeholder="description"
            component={InputField}
          />
          <input
  type="file"
  name="file"
  // component={InputField}
  onChange={event => (setFieldValue(event.target.files[0]))}
/>
          <Field as="select" name="categoryName" >
            <option value='default'>Choose Category</option>

            {selectCategories(props.Props)}
          </Field>
          <br/>
          <label >Is On Special Offer</label>
          <Field type="checkbox" name="isSpecialOffer" />
          <br/>
          <button type="submit">submit</button>
        </form>
        </AccordionItem>
        </Accordion>
      )}
      </Formik>
    </div >
  );
};
export default AddProductForm;
