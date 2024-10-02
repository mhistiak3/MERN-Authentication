export const emailVerificationTemplate = (email, code) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification Code</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333;
    }

    p {
      color: #666;
    }

    .code {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      background-color: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
      display: inline-block;
      margin: 20px 0;
    }

    .footer {
      margin-top: 40px;
      text-align: center;
      color: #999;
      font-size: 12px;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Email Verification</h1>
    <p>Hello ${email},</p>
    <p>Thank you for signing up! Use the verification code below to verify your email address:</p>
    
    <div class="code">${code}</div>

    <p>If you didn’t request this, you can safely ignore this email.</p>

    <div class="footer">
      <p>&copy; iA Coder | All rights reserved.</p>
    </div>
  </div>
</body>

</html>
`;
};
