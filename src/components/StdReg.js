
import React from 'react'
import { Form , Field, ErrorMessage, Formik} from 'formik';
 function StdReg() {
    const initialValues = {
        name:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:"",
        course:"",
        terms:false,

    };

    const validate =(values)=>{
        const errors = {};
        if(!values.name){
            errors.name="Full Name is required";
        }
        if(!values.email){
            errors.email="Email is required";
        }
        else if(!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/){  //rejects
            errors.email="Invalid email address";
        }
        if(!values.phone){
            errors.phone="Phone number is required";
        }
        else if(!/^\d{10}$/){
            errors.phone="Invalid phone number";
        }
        if(!values.password){
            errors.password="Password is required";
        }
        else if(!values.password.lenght>6){
            errors.password="Password must be atleast 6 characters"
        }
        if(!values.confirmpassword){
            errors.confirmpassword="Password is required";
        }
        else if(!values.confirmPassword.lenght<6){
            errors.confirmPassword="Password must be atleast 6 characters";
        }
        else if(!values.confirmpassword!==values.password){
            errors.confirmpassword="Password does not match";
        }
        if(!values.course){
            errors.course="Select a course";
        }
        if(!values.terms){
            errors.terms="Please! agree to terms and conditions";
        }
        return errors;
    };

    const handleSubmit = (values,{resetForm}) =>{
        alert("Form Submitted Successfully");
        resetForm();
    }

  return (
    <div className='Form-container'>
        <h2>Student Registration</h2>
        <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        <Form>
            <div>
                <label>Full Name:</label>
                <Field type="text" name="name"/>
                <ErrorMessage name="name" component="div" className='error'></ErrorMessage>
            </div>
            <div>
                <label>Email:</label>
                <Field type="email" name="email"/>
                <ErrorMessage name="email" component="div" className='error'></ErrorMessage>
            </div>
            <div>
                <label>Phone:</label>
                <Field type="text" name="phone"/>
                <ErrorMessage name="phone" component="div" className='error'></ErrorMessage>
            </div>
            <div>
                <label>Password:</label>
                <Field type="password" name="password"/>
                <ErrorMessage name="password" component="div" className='error'/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <Field type="password" name="confirmpassword"/>
                <ErrorMessage name="confirmpassword" component="div" className='error'/>
            </div>
            <div>
                <label>Course:</label>
                <Field as="select" name="course">
                    <option value="">Select</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Mern Stack">Mern Stack</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Machine Learning">Machine Learning</option>
                </Field>
                <ErrorMessage name="course" component="div" className='error'/>
            </div>
            <div>
                <Field type="checkbox" name="terms"/>
                    I agree to the terms and conditions :_|
                
                <ErrorMessage name="terms" component="div" className='error'/>
            </div>
            <button type="submit">Register</button>
        </Form>
        </Formik>
    </div>
  );
}
export default StdReg;