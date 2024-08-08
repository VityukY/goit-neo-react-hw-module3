import { useId } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css';
import * as yup from 'yup';

export default function ContactForm({ contactAdd }) {
  const contactSchema = yup.object().shape({
    name: yup.string().required("Required").min(3, "Too short").max(50, "Too long"),
    number: yup.string("need number").required("Required").min(3, "Too short").max(15, "Too long"), // Phone numbers are strings
  });

  const userHandler = (values, actions) => {
    contactAdd({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={userHandler}
      validationSchema={contactSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor={nameFieldId}>
          Name:
        </label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" className={styles.error} />

        <label htmlFor={numberFieldId}>
          Number:
        </label>
        <Field type="number" name="number" id={numberFieldId} />
        <ErrorMessage name="number" component="span" className={styles.error} />

        <button className={styles.submitButton} type="submit">
          New Contact
        </button>
      </Form>
    </Formik>
  );
}
