import React from 'react';
import { Header, Section, Main } from "../../imports";
import {Form, Field, FormRow, Select, Option, ErrorMessage, Button } from "../../lib/style/generalStyles"
import { Formik } from "formik";
import * as Yup from "yup";
import { createRoutesFromChildren } from "react-router-dom";
//import Button from "../../components/Button/Button";

const Register = () => {
    return (
        <>
        <Header isSecondary ={true} />
        <Main>
            <Section title = {"Profile"} 
            isMainSection={true}
            isCentered={true}>

            <Formik initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                githubUsername: "",
                zeplineUsername: "",
                activeFacultyYear: "",
            }} 
            validationSchema={Yup.object({
                firstName: Yup.string().required("First name is required"),
                lastName: Yup.string().required("Last name is required"),
                email: Yup.string().email("Invalid email address").required ("Email is required"),
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
                        githubUsername: "",
                        zeplineUsername: "",
                        activeFacultyYear: "",
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
        </Main>
        </>
    )
}

export default Register;