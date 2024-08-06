import {Formik} from 'formik'
export default function ContactForm ({addHandler}) {
    return <>
    <Formik initialValues={{}} onSubmit={addHandler}>
      ...
    </Formik>
    </>
}