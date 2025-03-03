import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TotalApplicationsCard from "../components/TotalApplicationsCard";
import { getApplicationsPerCategory } from "../services/statistics";
import "@testing-library/jest-dom";

jest.mock("../services/statistics", () => ({
  getApplicationsPerCategory: jest.fn(),
}));

const mockStore = configureStore([]);

describe("TotalApplicationsCard Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      statisticsSlice: {
        applicationsPerCategory: {
          Accepted: 1,
          Declined: 1,
          Ongoing: 5,
          Rejected: 10,
        },
      },
    });
  });

  test("Shows total count of job applications sent", () => {
    render(
      <Provider store={store}>
        <TotalApplicationsCard />
      </Provider>
    );

    expect(screen.getByText("17 Job Applications Sent")).toBeInTheDocument();
  });

  test("Fetches getApplicationsPerCategory on mount", () => {
    render(
      <Provider store={store}>
        <TotalApplicationsCard />
      </Provider>
    );

    expect(getApplicationsPerCategory).toHaveBeenCalled();
  });
});
