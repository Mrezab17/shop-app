import React, { useState, useEffect } from "react";

import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const initialValues = {
    title: "",
    price: "",
    description: "",
    image: "",
  };

  const RegisterSchema = Yup.object().shape({
    title: Yup.string()
      .required("وارد کردن نام کالا الزامی است.")
      .matches(/^[آ-ی]{3,}$/, "نام کالا معتبر نیست ."),

    price: Yup.string()
      .required("وارد کردن قیمت الزامی است")
      .matches(/^[0-9]{1,}$/, "قیمت وارد شده معتبر نیست"),
  });

  const submitForm = (values) => {
    toast("Form Submitted !");
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={RegisterSchema}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty,
          } = formik;
          return (
            <form
              className="bg-gray-300 h-full w-full rounded p-10 pl-10 space-y-0"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex-row row-span-1 h-10 space-x-10">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="نام کالا را وارد کنید"
                  className={`bg-white basis-5/12 h-full pl-3 rounded text-center `}
                />
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="قیمت کالا را وارد کنید"
                  className={`bg-white basis-5/12 h-full pl-3 rounded text-center float-left`}
                />
              </div>
              <div className="w-full row-span-1 h-16 space-x-0 bg-gray-300">
                {errors.title && touched.title && (
                  <div className=" w-5/12 pl-3 text-red-600 inline-block">
                    {errors.title}
                  </div>
                )}
                {errors.price && touched.price && (
                  <div className=" w-5/12 pl-3 text-red-600 inline-block float-left">
                    {errors.price}
                  </div>
                )}
              </div>
              <div className="w-full flex-row h-20 space-x-5">
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={values.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="توضیحات"
                  className="bg-white w-full h-full pl-3 rounded top-0 left-0"
                />
              </div>
              <div className="w-full row-span-1 h-16 space-x-0 "></div>
              <div className="w-full flex flex-row row-span-1 h-10 space-x-10">
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  id="image"
                  value={values.image}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" basis-5/12 pl-3 rounded flex items-center
                  justify-center"
                />
              </div>
              <div className="w-full row-span-1 h-16 space-x-0 ">
                {errors.phone && touched.phone && (
                  <div className=" w-6/12 text-red-600  inline-block ">
                    {errors.phone}
                  </div>
                )}
                {errors.email && touched.email && (
                  <div className=" w-5/12 pl-3 text-red-600 inline-block float-right">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="w-full flex flex-row row-span-1 row-start-2 h-10 space-x-5">
                <input
                  type="submit"
                  className={`${
                    dirty && isValid
                      ? "bg-green-600 basis-2/12 rounded-md cursor-pointer"
                      : "invisible"
                  } `}
                  disabled={!(dirty && isValid)}
                  value={"تایید"}
                />
              </div>
            </form>
          );
        }}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default Form;
