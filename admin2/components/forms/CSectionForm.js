import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Button from 'components/common/Button';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import { Formik, Form, Field } from 'formik';
import FormLayout, {
  FormButtons,
  FormError,
  FormMessage,
  FormRow,
} from 'components/layout/FormLayout';
import usePost from 'hooks/usePost';
import loginStyles from './CForm.module.css';

const validate = ({ name }) => {
  const errors = {};
  if (!name) {
    errors.name = <FormattedMessage id="label.required" defaultMessage="Required" />;
  }
  return errors;
};

export default function CSectionForm({
  formFields,
  formFieldsType,
  initValues,
  values,
  postLink,
  onSave,
  onClose,
}) {
  // const [name, setName] = useState();
  const post = usePost();
  const [message, setMessage] = useState();
  const initialValues = initValues;

  const handleSubmit = async values => {
    // console.log('Submit: ', values);
    // const ok = true;

    const { ok, data } = await post(postLink, values);

    if (ok) {
      onSave();
    } else {
      setMessage(
        data || <FormattedMessage id="message.failure" defaultMessage="Something went wrong." />,
      );
    }
  };

  return (
    <FormLayout className={loginStyles.login}>
      <Formik initialValues={{ ...initialValues, ...values }} onSubmit={handleSubmit}>
        {/* before: 182 - 307 = 125 loc */}
        {/* after:  */}
        {() => (
          <Form>
            {formFields.map((field, index) => (
              <FormRow>
                <label htmlFor={`${field}`}>
                  <FormattedMessage id={`label.${field}`} defaultMessage={`${field}`} />
                </label>
                <div>
                  <Field
                    name={`${field}`}
                    type={`${formFieldsType[index][1]}`}
                    as={`${formFieldsType[index][2]}`}
                  />
                  <FormError name={`${field}`} />
                </div>
              </FormRow>
            ))}

            <FormButtons>
              <Button type="submit" variant="action">
                <FormattedMessage id="label.submit" defaultMessage="Submit" />
              </Button>
              <Button onClick={onClose}>
                <FormattedMessage id="label.cancel" defaultMessage="Cancel" />
              </Button>
            </FormButtons>
            <FormMessage>{message}</FormMessage>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
}

// =================================================================
// Conditional Form
// {formFields.map(field => {
//   if (field[1] === "text") {
//     <FormRow>
//       <label htmlFor={`${field[0]}`}>
//         <FormattedMessage id={`label.${field[0]}`} defaultMessage={`${field[0]}`} />
//       </label>
//       <div>
//         <Field
//           name={`${field[0]}`}
//           type="text"
//         />
//         <FormError name={`${field[0]}`} />
//       </div>
//     </FormRow>
//   } else if (field[1] === "number") {
//     <FormRow>
//       <label htmlFor={`${field[0]}`}>
//         <FormattedMessage id={`label.${field[0]}`} defaultMessage={`${field[0]}`} />
//       </label>
//       <div>
//         <Field
//           name={`${field[0]}`}
//           type="number"
//         />
//         <FormError name={`${field[0]}`} />
//       </div>
//     </FormRow>
//   } else if (field[1] === "textarea") {
//     <FormRow>
//       <label htmlFor={`${field[0]}`}>
//         <FormattedMessage id={`label.${field[0]}`} defaultMessage={`${field[0]}`} />
//       </label>
//       <div>
//         <Field
//           name={`${field[0]}`}
//           type="textarea"
//         />
//         <FormError name={`${field[0]}`} />
//       </div>
//     </FormRow>
//   } else if (field[1] === "checkbox") {
//     <FormRow>
//       <label />
//       <Field name={`${field}`}>
//         {
//           // ({ field }) => (
//           <Checkbox
//             // {...field}
//             label={
//               <FormattedMessage
//                 id={`label.${field}`}
//                 defaultMessage={`${field}`}
//               />
//             }
//           />
//           // )
//         }
//       </Field>
//     </FormRow>
//   }
// }
// )}

// ===========================================================
// styled checkbox
{
  /* <a
  className="show_design_link"
  href="#"
  role="button"
>
  <label className="show_design">
    <input
      className="label__checkbox"
      id="show_design"
      name="show_design"
      type="checkbox"
      checked={false}
      readOnly
    />
    <span className="label__text">
      <span className="label__check">
        <i className="fa fa-check icon"></i>
      </span>
    </span>
    <label className="show_design_label" htmlFor="show_design">
      Show Lenses Design
    </label>
  </label>
</a> */
}
