const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateApplication(data) {
  const errors = {};

  if (!data.fullName?.trim()) {
    errors.fullName = 'Full name is required';
  }

  if (!data.phone?.trim()) {
    errors.phone = 'Phone number is required';
  }

  if (!data.email?.trim()) {
    errors.email = 'Email address is required';
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!data.loanAmount?.trim()) {
    errors.loanAmount = 'Loan amount is required';
  } else if (isNaN(Number(data.loanAmount)) || Number(data.loanAmount) <= 0) {
    errors.loanAmount = 'Loan amount must be a positive number';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
