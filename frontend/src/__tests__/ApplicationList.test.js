import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ApplicationList from "../components/ApplicationList";
import { GetApplications } from "../services/applications";
import "@testing-library/jest-dom";

// Mock the GetApplications function
jest.mock("../services/applications", () => ({
  GetApplications: jest.fn(),
}));

const mockStore = configureStore([]);

describe("ApplicationList Component", () => { // Describe block for ApplicationList Component, groups together related tests
  let store;

  beforeEach(() => {
    store = mockStore({
      applicationsSlice: {
        applications: [
          {
            id: 1,
            company: "testCompany",
            position: "Software Engineer",
            city: "Auckland",
            jobType: "Full-Time",
            jobStatus: "Accepted",
            createdAt: "2024-03-01T12:00:00Z",
          },
          {
            id: 2,
            company: "zzzCompany",
            position: "Data Engineer",
            city: "Auckland",
            jobType: "Full-Time",
            jobStatus: "Ongoing",
            createdAt: "2024-03-02T12:00:00Z",
          },
        ],
        total: 2,
      },
    });
  });

  test("Shows correct job count and filters jobs", () => {
    render(
      <Provider store={store}>
        <ApplicationList />
      </Provider>
    );

    // Check total jobs
    expect(screen.getByText("2 Jobs Found")).toBeInTheDocument();
  });

  test("Fetches job applications on mount", () => {
    render(
      <Provider store={store}>
        <ApplicationList />
      </Provider>
    );

    expect(GetApplications).toHaveBeenCalled();
  });

  test("Toggles sorting arrow", () => {
    render(
      <Provider store={store}>
        <ApplicationList />
      </Provider>
    );

    // Click to toggle sorting
    fireEvent.click(screen.getByTestId("ArrowUpwardIcon"));

    // Check if sorting arrow changed
    expect(screen.getByTestId("ArrowDownwardIcon")).toBeInTheDocument();
  });
});



// Jest - the framework for running the tests:
// describe() → Groups tests.
// test() or it() → Defines individual tests.
// jest.mock() → Mocks GetApplications to prevent real API calls.
// expect() → Asserts expected behavior.


// React Testing Library - its used to render and interact with components:
// render() → Renders ApplicationList inside a mock Redux store.
// screen.getByText() → Queries elements in the rendered component.
// fireEvent.change() → Simulates user input.
// fireEvent.click() → Simulates button clicks.
