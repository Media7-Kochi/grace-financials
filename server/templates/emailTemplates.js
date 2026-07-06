export function adminEmailTemplate(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Application</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f7fa;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f7fa;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#0a1628,#1a2a4a);padding:32px 40px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px;">Grace Financials</h1>
              <p style="color:#94a3b8;margin:4px 0 0;font-size:14px;">New Loan Application Received</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:8px;">
                    <h2 style="margin:0 0 20px;font-size:18px;color:#1e293b;font-weight:600;">Applicant Details</h2>
                  </td>
                </tr>
                ${[
                  ['Full Name', data.fullName],
                  ['Date of Birth', data.dateOfBirth || '—'],
                  ['Phone', data.phone],
                  ['Email', data.email],
                  ['Loan Type', data.loanType || '—'],
                  ['Loan Amount', data.loanAmount ? '₹' + Number(data.loanAmount).toLocaleString('en-IN') : '—'],
                  ['Employment Type', data.employmentType || '—'],
                  ['Monthly Income', data.monthlyIncome ? '₹' + Number(data.monthlyIncome).toLocaleString('en-IN') : '—'],
                  ['CIBIL Score', data.cibilScore || '—'],
                  ['Original Salary Slip', data.originalSalarySlip || '—'],
                  ['Address', data.address || '—'],
                  ['Additional Notes', data.notes || '—'],
                ].map(([label, value]) => `
                <tr>
                  <td style="padding:6px 0;border-bottom:1px solid #f1f5f9;">
                    <table role="presentation" width="100%">
                      <tr>
                        <td width="40%" style="color:#64748b;font-size:14px;vertical-align:top;padding:4px 0;">${label}</td>
                        <td width="60%" style="color:#0f172a;font-size:14px;font-weight:500;vertical-align:top;padding:4px 0;">${value}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                `).join('')}
                <tr>
                  <td style="padding-top:8px;color:#94a3b8;font-size:13px;">Submitted at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f8fafc;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#94a3b8;font-size:13px;">&copy; ${new Date().getFullYear()} Grace Financials. All rights reserved.</p>
              <p style="margin:4px 0 0;color:#94a3b8;font-size:13px;">
                <a href="mailto:info.gracefinancialconsultancy@gmail.com" style="color:#2563eb;text-decoration:none;">info.gracefinancialconsultancy@gmail.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function applicantEmailTemplate(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f7fa;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f7fa;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#0a1628,#1a2a4a);padding:32px 40px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px;">Grace Financials</h1>
              <p style="color:#94a3b8;margin:4px 0 0;font-size:14px;">Application Received Successfully</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;text-align:center;">
              <div style="width:64px;height:64px;background-color:#dbeafe;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:16px;">
                <span style="font-size:32px;line-height:1;">&#10003;</span>
              </div>
              <h2 style="margin:0 0 8px;font-size:20px;color:#1e293b;font-weight:600;">Thank You, ${data.fullName}!</h2>
              <p style="margin:0 0 24px;color:#64748b;font-size:15px;line-height:1.6;">
                We have received your loan application successfully. Our team will review your details and get back to you shortly.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;margin-bottom:24px;">
                <tr>
                  <td style="padding:16px 20px;text-align:left;">
                    <p style="margin:0 0 8px;color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">What happens next?</p>
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:4px 0;color:#475569;font-size:14px;">
                          <span style="color:#2563eb;font-weight:600;">1.</span> Our team reviews your application
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#475569;font-size:14px;">
                          <span style="color:#2563eb;font-weight:600;">2.</span> We verify your documents and eligibility
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#475569;font-size:14px;">
                          <span style="color:#2563eb;font-weight:600;">3.</span> A representative contacts you with the next steps
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 4px;color:#64748b;font-size:14px;">
                Need immediate assistance?
              </p>
              <p style="margin:0;color:#64748b;font-size:14px;">
                Call or WhatsApp us at
                <a href="tel:+919995533809" style="color:#2563eb;text-decoration:none;font-weight:500;">+91 99955 33809</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f8fafc;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#94a3b8;font-size:13px;">&copy; ${new Date().getFullYear()} Grace Financials. All rights reserved.</p>
              <p style="margin:4px 0 0;color:#94a3b8;font-size:13px;">
                <a href="mailto:info.gracefinancialconsultancy@gmail.com" style="color:#2563eb;text-decoration:none;">info.gracefinancialconsultancy@gmail.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
