import * as Yup from 'yup';

export const checkoutValidationSchema = Yup.object({
 name: Yup.string().required('Campo requerido'),
 cellphone: Yup.string().required('Campo requerido'),
 location: Yup.string().required('Campo requerido'),
 address: Yup.string().required('Campo requerido'),
})

export const registerValidationSchema = Yup.object({
 name: Yup.string().required('Campo requerido'),
 email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
 password: Yup.string()
 .min(6, 'La contraseña debe tener al menos 6 caracteres')
 .required('Campo requerido'),
})

export const loginValidationSchema = Yup.object({
 email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
 password: Yup.string().required('Campo requerido'),
})

export const forgotPasswordValidationSchema = Yup.object({
 email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
})