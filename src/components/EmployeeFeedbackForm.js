import React from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';

function EmployeeFeedbackForm() {
    const initialValues = {
        fullName: "",
        email: "",
        department: "",
        rating: "",
        feedback: "",
    };

    const validationSchema = Yup.object({
        fullName: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Full name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        department: Yup.string().required("Department is required"),
        rating: Yup.number()
            .min(1, "Minimum rating is 1")
            .max(5, "Maximum rating is 5")
            .required("Rating is required"),
        feedback: Yup.string()
            .max(200, "Feedback should be under 200 characters"),
    });

    const handleSubmit = (values, { resetForm }) => {
        alert("Feedback Submitted Successfully");
        resetForm();
    };

    return (
        <div className="form-container">
            <h2>Employee Feedback Form</h2>
            <Formik
                initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label>Full Name:</label>
                        <Field type="text" name="fullName" className="field" />
                        <ErrorMessage name="fullName" component="div" className="error" />
                    </div>
                    <div>
                <label>Email:</label>
            <Field type="email" name="email" className="field"/>
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>
                    <div>
                <label>Department:</label>
                        <Field type="text" name="department" className="field"/>
                        <ErrorMessage name="department" component="div" className="error" />
                    </div>
                    <div>
                        <label>Rating (1-5):</label>
                        <Field type="number" name="rating" className="field"/>
               <ErrorMessage name="rating" component="div" className="error" />
     </div>
                    <div>
                        <label>Feedback:</label>
                    <Field type="text" name="feedback" className="field"/>
                        <ErrorMessage name="feedback" component="div" className="error" />
                    </div>
                    <button type="submit">Submit Feedback</button>
                </Form>
            </Formik>
        </div>
    );
}

export default EmployeeFeedbackForm;
