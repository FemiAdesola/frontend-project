import * as yup from "yup"
export const SignUpSchema = yup.object({
    name: yup.string().required().min(2).max(25),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(15),
    confirm_password: yup.string().oneOf([yup.ref("password")], "password does not match"),
    avatar: yup.mixed().test({
        test: (value) => value.length > 0,
        message: "file cannot be empty"
    })
})