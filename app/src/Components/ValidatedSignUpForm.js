import React from "react";
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";

import "../CSS/LoginFeature.css";

const ValidatedSignUpForm = () => (
  <Formik
    initialValues={{ 
        name_sei: '',
        name_mei: '',
        name_kana_sei: '',
        name_kana_mei: '',
        email: '',
        password: '',
        password_check: ''
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}

    validationSchema={Yup.object().shape({
        name_sei: Yup.string()
            .required("必須項目です"),
        name_mei: Yup.string()
            .required("必須項目です"),
        name_kana_sei: Yup.string()
            .required("必須項目です"),
        name_kana_mei: Yup.string()
            .required("必須項目です"),
        email: Yup.string()
            .email("有効なメールアドレスではありません")
            .required("必須項目です"),
        password: Yup.string()
            .required("必須項目です")
            .min(8, "パスワードは8文字以上です")
            .matches(/(?=.*[0-9])/, "パスワードは半角英数字で入力してください"),
        password_check: Yup.string()
            .oneOf([Yup.ref('password')], "パスワードが一致しません")
            .required("必須項目です"),
    })}
  >
    {props => {
        const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
        } = props;
        return (
            <form onSubmit={handleSubmit} className='input-form'>
                <label htmlFor="email">姓</label>
                    <input
                    name="name_sei"
                    type="text"
                    placeholder="姓"
                    value={values.name_sei}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name_sei && touched.name_sei && "error"}
                />
                {errors.name_sei && touched.name_sei && (
                    <div className="input-feedback">{errors.name_sei}</div>
                )}
                <label htmlFor="email">名</label>
                    <input
                    name="name_mei"
                    type="text"
                    placeholder="名"
                    value={values.name_mei}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name_mei && touched.name_mei && "error"}
                />
                {errors.name_mei && touched.name_mei && (
                    <div className="input-feedback">{errors.name_mei}</div>
                )}
                <label htmlFor="email">セイ</label>
                    <input
                    name="name_kana_sei"
                    type="text"
                    placeholder="セイ"
                    value={values.name_kana_sei}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name_kana_sei && touched.name_kana_sei && "error"}
                />
                {errors.name_kana_sei && touched.name_kana_sei && (
                    <div className="input-feedback">{errors.name_kana_sei}</div>
                )}
                <label htmlFor="email">メイ</label>
                    <input
                    name="name_kana_mei"
                    type="text"
                    placeholder="メイ"
                    value={values.name_kana_mei}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name_kana_mei && touched.name_kana_mei && "error"}
                />
                {errors.name_kana_mei && touched.name_kana_mei && (
                    <div className="input-feedback">{errors.name_kana_mei}</div>
                )}
                <label htmlFor="email">メールアドレス</label>
                <input
                    name="email"
                    type="text"
                    placeholder="メールアドレスを入力"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                )}
                <label htmlFor="email">パスワード</label>
                <input
                    name="password"
                    type="password"
                    placeholder="パスワードを入力"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                />
                {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                )}
                <label htmlFor="email">パスワード(確認)</label>
                <input
                    name="password_check"
                    type="password"
                    placeholder="再度パスワードを入力"
                    value={values.password_check}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password_check && touched.password_check && "error"}
                />
                {errors.password_check && touched.password_check && (
                    <div className="input-feedback">{errors.password_check}</div>
                )}
                <button type="submit" disabled={isSubmitting}>
                    登録
                </button>
            </form>
        );
    }}
  </Formik>
);

export default ValidatedSignUpForm;