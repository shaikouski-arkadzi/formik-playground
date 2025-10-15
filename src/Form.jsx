import { useFormik } from "formik";
import {
  object as YUPObject,
  string as YUPString,
  number as YUPNumber,
  boolean as YUPBoolean,
} from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      amount: 0,
      currency: "",
      text: "",
      terms: false,
    },
    validationSchema: YUPObject({
      name: YUPString().min(2, "2 letters minimum").required("Required"),
      email: YUPString().email("Wrong email format").required("Required"),
      amount: YUPNumber().required("Required"),
      currency: YUPString().required("Required"),
      text: YUPString(),
      terms: YUPBoolean()
        .required("Required")
        .oneOf([true], "Must be confirmed"),
    }),
  });

  return (
    <form className="form">
      <h2>Отправить пожертвование</h2>
      <label htmlFor="name">Ваше имя</label>
      <input
        id="name"
        name="name"
        type="text"
        {...formik.getFieldProps("name")}
      />
      {formik.errors.name && formik.touched.name && formik.errors.name}
      <label htmlFor="email">Ваша почта</label>
      <input
        id="email"
        name="email"
        type="email"
        {...formik.getFieldProps("email")}
      />
      {formik.errors.email && formik.touched.email && formik.errors.email}
      <label htmlFor="amount">Количество</label>
      <input
        id="amount"
        name="amount"
        type="number"
        {...formik.getFieldProps("amount")}
      />
      {formik.errors.amount && formik.touched.amount && formik.errors.amount}
      <label htmlFor="currency">Валюта</label>
      <select
        id="currency"
        name="currency"
        {...formik.getFieldProps("currency")}
      >
        <option value="">Выберите валюту</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">RUB</option>
      </select>
      {formik.errors.currency &&
        formik.touched.currency &&
        formik.errors.currency}
      <label htmlFor="text">Ваше сообщение</label>
      <textarea id="text" name="text" {...formik.getFieldProps("text")} />
      {formik.errors.text && formik.touched.text && formik.errors.text}
      <label className="checkbox">
        <input
          name="terms"
          type="checkbox"
          {...formik.getFieldProps("terms")}
        />
        Соглашаетесь с политикой конфиденциальности?
      </label>
      {formik.errors.terms && formik.touched.terms && formik.errors.terms}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
