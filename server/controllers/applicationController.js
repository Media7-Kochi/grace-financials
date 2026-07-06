import db from '../config/db.js';
import { sendEmail } from '../services/emailService.js';
import { validateApplication } from '../utils/validation.js';
import { adminEmailTemplate, applicantEmailTemplate } from '../templates/emailTemplates.js';

function formatApplication(data, id) {
  return {
    id,
    fullName: data.fullName,
    dateOfBirth: data.dateOfBirth || null,
    phone: data.phone,
    email: data.email,
    loanType: data.loanType || null,
    loanAmount: data.loanAmount,
    employmentType: data.employmentType || null,
    monthlyIncome: data.monthlyIncome || null,
    cibilScore: data.cibilScore || null,
    bankTransfer: data.bankTransfer || null,
    address: data.address || null,
    notes: data.notes || null,
  };
}

export async function submitApplication(req, res) {
  const data = req.body;

  const { valid, errors } = validateApplication(data);
  if (!valid) {
    return res.status(400).json({ success: false, errors });
  }

  let applicationId;

  try {
    const stmt = db.prepare(`
      INSERT INTO applications (full_name, date_of_birth, phone, email, loan_type, loan_amount, employment_type, monthly_income, cibil_score, bank_transfer, address, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      data.fullName,
      data.dateOfBirth || null,
      data.phone,
      data.email,
      data.loanType || null,
      data.loanAmount,
      data.employmentType || null,
      data.monthlyIncome || null,
      data.cibilScore || null,
      data.bankTransfer || null,
      data.address || null,
      data.notes || null,
    );

    applicationId = Number(result.lastInsertRowid);
  } catch (error) {
    console.error('Database insert failed:', error);
    return res.status(500).json({ success: false, message: 'Failed to save application. Please try again.' });
  }

  const application = formatApplication(data, applicationId);

  // Fire-and-forget: email failures are logged but don't block the response
  Promise.allSettled([
    sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: `New Loan Application – ${data.fullName}`,
      htmlContent: adminEmailTemplate(application),
    }).catch((error) => {
      console.error('Admin email notification failed:', error.message);
    }),
    sendEmail({
      to: data.email,
      subject: 'Application Received – Grace Financials',
      htmlContent: applicantEmailTemplate(application),
    }).catch((error) => {
      console.error('Applicant confirmation email failed:', error.message);
    }),
  ]);

  return res.status(201).json({
    success: true,
    message: 'Application submitted successfully',
    applicationId,
  });
}
