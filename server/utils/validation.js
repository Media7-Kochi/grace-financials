const EMAIL_REGEX = /^[^\s@]+@gmail\.com$/;

const countryDigits = {
  '+1': 10, '+44': 11, '+61': 10, '+81': 11, '+86': 11, '+91': 10,
  '+92': 10, '+93': 9, '+94': 10, '+95': 10, '+971': 9, '+974': 8,
  '+966': 9, '+65': 8, '+60': 10, '+62': 11, '+63': 10, '+66': 9,
  '+49': 11, '+33': 9, '+39': 10, '+7': 10, '+55': 11,
}

export function validateApplication(data) {
  const errors = {};

  if (!data.fullName?.trim()) {
    errors.fullName = 'Full name is required';
  }

  if (!data.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else {
    const match = Object.entries(countryDigits)
      .sort(([a], [b]) => b.length - a.length)
      .find(([code]) => data.phone.startsWith(code))
    if (match) {
      const [code, digits] = match
      const num = data.phone.slice(code.length)
      if (num.length !== digits) {
        errors.phone = `Phone number must have ${digits} digits after ${code}`
      }
    }
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

  if (data.cibilScore?.trim() && (isNaN(Number(data.cibilScore)) || Number(data.cibilScore) < 300 || Number(data.cibilScore) > 900)) {
    errors.cibilScore = 'CIBIL score must be between 300 and 900';
  }

  if (!data.bankTransfer?.trim()) {
    errors.bankTransfer = 'Please select whether your salary is transferred through bank';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
