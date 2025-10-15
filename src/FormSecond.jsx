import { Form, Field, ErrorMessage, Formik } from "formik";
import {
  object as YUPObject,
  string as YUPString,
  number as YUPNumber,
  boolean as YUPBoolean,
} from "yup";
import TextInput from "./TextInput";

const FormSecond = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        amount: 0,
        currency: "",
        text: "",
        terms: false,
      }}
      validationSchema={YUPObject({
        name: YUPString().min(2, "2 letters minimum").required("Required"),
        email: YUPString().email("Wrong email format").required("Required"),
        amount: YUPNumber().required("Required"),
        currency: YUPString().required("Required"),
        text: YUPString(),
        terms: YUPBoolean()
          .required("Required")
          .oneOf([true], "Must be confirmed"),
      })}
    >
      <Form className="form">
        <h2>Отправить пожертвование</h2>
        <TextInput label="Ваше имя" id="name" name="name" type="text" />

        <TextInput label="Ваша почта" id="email" name="email" type="text" />

        <TextInput label="Количество" id="amount" name="amount" type="number" />

        <label htmlFor="currency">Валюта</label>
        <Field id="currency" name="currency" as="select">
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
        </Field>
        <ErrorMessage className="error" name="currency" />

        <label htmlFor="text">Ваше сообщение</label>
        <Field id="text" name="text" as="textarea" />
        <ErrorMessage className="error" name="text" />

        <label className="checkbox">
          <Field name="terms" type="checkbox" />
          Соглашаетесь с политикой конфиденциальности?
        </label>
        <ErrorMessage className="error" name="terms" />

        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default FormSecond;
