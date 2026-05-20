import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Signin from './Signin';

// Helper function to wrap our component in a Router context
const renderWithRouter = (ui) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('Singin Component Test Suite', () => {
  
  // Clean up mock calls and localStorage before each test run
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    // Mock the global alert function so it doesn't open an actual pop-up box
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    window.alert.mockRestore();
  });

  test('renders all Signin page elements properly', () => {
    renderWithRouter(<Signin />);
    
    // Check headers and descriptions
    expect(screen.getByRole('heading', { name: /^Signin$/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your registered Email ID/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Signin$/i })).toBeInTheDocument();
  });

  test('displays field-specific error messages if fields are left blank on submit', async () => {
    renderWithRouter(<Signin />);
    
    const submitButton = screen.getByRole('button', { name: /^Signin$/i });
    userEvent.click(submitButton);

    // Assert validation logic catches blank items
    expect(await screen.findByText(/Email ID is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });

  test('displays custom validation error for incorrect email formatting', async () => {
    renderWithRouter(<Signin />);
    
    const emailInput = screen.getByPlaceholderText(/Enter your registered Email ID/i);
    const submitButton = screen.getByRole('button', { name: /^Signin$/i });

    // Type a string missing standard email structures
    await userEvent.type(emailInput, 'invalidemailform');
    userEvent.click(submitButton);

    expect(await screen.findByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  test('displays validation error if password is less than 6 characters', async () => {
    renderWithRouter(<Signin />);
    
    const emailInput = screen.getByPlaceholderText(/Enter your registered Email ID/i);
    const passwordInput = screen.getByPlaceholderText(/Enter your password/i);
    const submitButton = screen.getByRole('button', { name: /^Signin$/i });

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, '1234'); // short password
    userEvent.click(submitButton);

    expect(await screen.findByText(/Password must be at least 6 characters/i)).toBeInTheDocument();
  });

  test('securely saves JWT token to localStorage upon a successful API response', async () => {
    const fakeToken = "mocked-jwt-token-xyz-123";
    const fakeUser = { email: "user@example.com", name: "Job Seeker" };

    // Intercept network requests and generate a successful response stub
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token: fakeToken, user: fakeUser }),
      })
    );

    renderWithRouter(<Signin />);

    // Feed accurate configurations to fields
    await userEvent.type(screen.getByPlaceholderText(/Enter your registered Email ID/i), 'user@example.com');
    await userEvent.type(screen.getByPlaceholderText(/Enter your password/i), 'StrongPassword123');
    
    const submitButton = screen.getByRole('button', { name: /^Singin$/i });
    userEvent.click(submitButton);

    // Verify localStorage holds tokens securely following execution
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(localStorage.getItem('token')).toBe(fakeToken);
      expect(JSON.parse(localStorage.getItem('user'))).toEqual(fakeUser);
    });

    global.fetch.mockClear();
  });
});
