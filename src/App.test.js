import { render, fireEvent, screen } from "@testing-library/react";
import Reserve from "./Little-Lemon-main/src/ReservationForm";
import ReservationForm from "./ReservationForm";

describe("Form Submittion",()=>{
test("Submittion is Disabled if the Form is not Fully Filled", () => {
  const handleSubmit = jest.fn();
  render (<FormSubmittion onSubmit={handleSubmit}/>);
  // render the App component
  render(<Reserve />);

  // save the heading in a variable
  //const heading = screen.getByTestId("currentNumber");

  // save the button in a variable
  //const btn = screen.getByTestId("addOne");

  // click the btn
  fireEvent.click(btn);

  // test assumption
  //expect(heading).toHaveTextContent("2");
  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");
});
});