import { Header, Main, Section } from "../../imports";
import {Form, Field, FormRow, Select, Option, ErrorMessage, Button } from "../../lib/style/generalStyles"
import { Formik } from "formik"
import * as Yup from "yup";
import { createRoutesFromChildren } from "react-router-dom";
/* import Button from "../../components/Button/Button"; */
const Login = () => {
    return (
        <>
        <Header isSecondary />
        <Main>
        <Section title = {"Login"} isMainSection isCentered>

            <Formik initialValues={{
                email: "",
                password: "",
                passwordConfirmed: "",
                isAdmin: false
            }} 
            validationSchema={Yup.object({
                email: Yup.string().email("Invalid email address").required ("Email is required"),
                password: Yup.string().min(8, "Password must be at least 8 characters long"),
                passwordConfirmed: Yup.string().test("password-match", "Passwords must match", function(value){
                    return this.parent.password === value
                }),
            })} 
            onSubmit= {(values, actions) => {
                setTimeout(()=> {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false)
                    actions.resetForm({
                        email: "",
                        password: "",
                        passwordConfirmed: "",
                        isAdmin: false,
                    })
                }, 1000);
            }}
            >
                {(formik) =>(
                    <Form isCentered>
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

export default Login;