import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ApplicationForm from "../components/ApplicationForm";
import { NewApplication } from "../services/applications";
import "@testing-library/jest-dom";

jest.mock("../services/applications", () => ({
  NewApplication: jest.fn(),
}));

const mockStore = configureStore([]);

describe("ApplicationForm Component", () => {
  let store;
  let setIsEditingMock;

  beforeEach(() => {
    store = mockStore({});
    setIsEditingMock = jest.fn();
  });

  test("Updates form fields correctly", () => {
    render(
      <Provider store={store}>
        <ApplicationForm setIsEditing={setIsEditingMock} />
      </Provider>
    );

    // Type into input fields
    fireEvent.change(screen.getByLabelText(/Company/i), {
      target: { value: "zzzTestCompany" },
    });
    fireEvent.change(screen.getByLabelText(/Position/i), {
      target: { value: "Junior Software Developer" },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: "Auckland" },
    });
    fireEvent.change(screen.getByLabelText(/Job Type/i), {
      target: { value: "Full-Time" },
    });
    fireEvent.change(screen.getByLabelText(/Status/i), {
      target: { value: "Ongoing" },
    });

    // Check if values are updated
    expect(screen.getByLabelText(/Company/i)).toHaveValue("zzzTestCompany");
    expect(screen.getByLabelText(/Position/i)).toHaveValue("Junior Software Developer");
    expect(screen.getByLabelText(/City/i)).toHaveValue("Auckland");
    expect(screen.getByLabelText(/Job Type/i)).toHaveValue("Full-Time");
    expect(screen.getByLabelText(/Status/i)).toHaveValue("Ongoing");
  });

  test("Calls NewApplication on submit when adding a new job", () => {
    render(
      <Provider store={store}>
        <ApplicationForm setIsEditing={setIsEditingMock} />
      </Provider>
    );

    // Fill form fields
    fireEvent.change(screen.getByLabelText(/Company/i), {
      target: { value: "zzzTestCompany" },
    });
    fireEvent.change(screen.getByLabelText(/Position/i), {
      target: { value: "Junior Software Developer" },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: "Auckland" },
    });
    fireEvent.change(screen.getByLabelText(/Job Type/i), {
      target: { value: "Full-Time" },
    });
    fireEvent.change(screen.getByLabelText(/Status/i), {
      target: { value: "Ongoing" },
    });

    // Submit form
    fireEvent.click(screen.getByRole("button", { name: /Add Job Application/i }));

    // Check if NewApplication was called
    expect(NewApplication).toHaveBeenCalledWith(expect.any(Function), {
      company: "zzzTestCompany",
      position: "Junior Software Developer",
      jobStatus: "Ongoing",
      jobType: "Full-Time",
      city: "Auckland",
    });
  });
});
