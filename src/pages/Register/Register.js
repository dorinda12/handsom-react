import React from 'react';
import { Header, Section } from "../../imports";
import {Form, Field, FormRow, Select, Option, ErrorMessage } from "../../lib/style/generalStyles"
import { Formik } from "formik";
import * as Yup from "yup";
import { createRoutesFromChildren } from "react-router-dom";
import Button from "../../components/Button/Button";
const Register = () => {
    return (
        <>
        <Header isSecondary />

        <Section title = {"Register"} isMainSection isCentered>

            <Formik initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                passwordConfirmed: "",
                githubUsername: "",
                zeplineUsername: "",
                activeFacultyYear: "",
                isAdmin: false
            }} 
            validationSchema={Yup.object({
                firstName: Yup.string().required("First name is required"),
                lastName: Yup.string().required("Last name is required"),
                email: Yup.string().email("Invalid email address").required ("Email is required"),
                password: Yup.string().min(8, "Password must be at least 8 characters long"),
                passwordConfirmed: Yup.string().test("password-match", "Passwords must match", function(value){
                    return this.parent.password === value
                }),
                githubUsername: Yup.string().required("Github username is required"),
                zeplineUsername: Yup.string().required("Zepline username is required"),
                activeFacultyYear: Yup.string().required("Active faculty year is required"),
            })} 
            onSubmit= {(values, actions) => {
                setTimeout(()=> {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false)
                    actions.resetForm({
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        passwordConfirmed: "",
                        githubUsername: "",
                        zeplineUsername: "",
                        activeFacultyYear: "",
                        isAdmin: false,
                    })
                }, 1000);
            }}
            >
                {(formik) =>(
                    <Form isCentered>
                        <FormRow>
                            <Field type="text" name = "firstName" placeholder="First name..." disabled={formik.isSubmitting}/>
                            <ErrorMessage component={"div"} name="firstName"/>
                        </FormRow>
                        <FormRow>
                            <Field type="text" name = "lastName" placeholder="Last name..." disabled={formik.isSubmitting}/>
                            <ErrorMessage component={"div"} name="lastName"/>
                        </FormRow>
                        <FormRow>
                            <Field type="email" name = "email" placeholder="Email..." disabled={formik.isSubmitting}/>
                            <ErrorMessage component={"div"} name="email"/>
                        </FormRow>
                        <FormRow>
                            <Field type="password" name = "password" placeholder="Password..." disabled={formik.isSubmitting}/>
                            <ErrorMessage component={"div"} name="password"/>
                        </FormRow>
                        <FormRow>
                            <Field type="password" name = "passwordConfirmed" placeholder="Confirm password..." disabled={formik.isSubmitting}/>
                            <ErrorMessage component={"div"} name="passwordConfirmed"/>
                        </FormRow>
                        <FormRow>
                            <Field type="text" name = "githubUsername" placeholder="Github username..." disabled={formik.isSubmitting}/>
                            <ErrorMessage component={"div"} name="githubUsername"/>
                        </FormRow>
                        <FormRow>
                            <Field type="text" name = "zeplineUsername" placeholder="Zepline username..." disabled={formik.isSubmitting}/>
                            <ErrorMessage component={"div"} name="zeplinUsername"/>
                        </FormRow>
                        <FormRow>
                            <Select id ="activeFacultyYear" {...formik.getFieldProps("activeFacultyYear")}>
                            <Option value="" disabled hidden>
                                Choose an Active faculty year
                            </Option>
                            <Option value='0'>Not a student</Option>
                            <Option value='1'>1st faculty year</Option>
                            <Option value='2'>2nd faculty year</Option>
                            <Option value='3'>3rd faculty year</Option>
                            <Option value='4'>4th faculty year</Option>
                            <Option value='5'>5th faculty year</Option>
                            </Select>
                            <ErrorMessage component={"div"} name="activeFacultyYear"/>
                        </FormRow>
                        <FormRow>
                            <Button isOutlined isForm disabled ={formik.isSubmitting}>
                                {
                                    formik.isSubmitting ? "Processing..." : "Register"
                                }
                            </Button>
                        </FormRow>
                    </Form>
                )}
            </Formik>
        </Section>
        </>
    )
}

export default Register;