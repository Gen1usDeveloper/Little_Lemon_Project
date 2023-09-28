import React from "react";
import "./ReservationForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Full name is a required field!"),
  email: yup
    .string()
    .required("Email is a required field!")
    .email("Email is not valid!"),
  cellPhone: yup.string().required("Telephone is a required field!"),
  // .matches(
  //   /^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/,
  //   "Phone number must match the form 233 00 000 0000"
  // ),
  guests: yup
    .number()
    .min(1, "There must be at least 1 guest!")
    .required("Please specify number of guests per table!"),
  date: yup.string().required("Please select date and time!")
});

function ReservationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const formSubmit = (data) => {
    console.table(data);
    alert("Table Reserved Successfully!");
    window.location.href = window.location.origin;
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="reservation-form-wrapper"
    >
      <fieldset>
        <div className="field">
          <label htmlFor="name">Full Name*</label>
          <input
            type="text"
            placeholder="Alena DeCroz"
            name="name"
            {...register("name")}
          />
          <span className="error-message">{errors.name?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            placeholder="ABC@email.com"
            name="email"
            {...register("email")}
          />
          <span className="error-message">{errors.email?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="cellPhone">Cell Phone*</label>
          <input
            type="tel"
            placeholder="012 345 6789"
            name="cellPhone"
            {...register("cellPhone")}
          />
          <span className="error-message">{errors.telephone?.message}</span>
        </div>

        <div className="field occasion">
          <label htmlFor="occasion">Occasion (optional)</label>
          <div className="options">
            <select name="occasion" {...register("occasion")}>
              <option value="select">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Enagement</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>

        <div className="field guest">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            placeholder=""
            min={1}
            name="guests"
            {...register("guests")}
          />
          <span className="error-message">{errors.guests?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="date">Date & Time</label>
          <input type="datetime-local" name="date" {...register("date")} />
          <span className="error-message">{errors.date?.message}</span>
        </div>
        <button className="reservation-form-btn" type="submit">
           Reserve a Table
        </button>
      </fieldset>
    </form>
  );
}

export default ReservationForm;
