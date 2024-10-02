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
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    h1 {
      color: #4CAF50;
      font-size: 26px;
      margin-bottom: 20px;
    }

    p {
      color: #555;
      font-size: 16px;
      line-height: 1.6;
    }

    .code {
      font-size: 28px;
      font-weight: bold;
      color: #333;
      background-color: #f1f1f1;
      padding: 15px;
      border-radius: 8px;
      display: inline-block;
      letter-spacing: 2px;
      margin: 20px 0;
    }

    .footer {
      margin-top: 40px;
      text-align: center;
      color: #999;
      font-size: 12px;
    }

    .footer a {
      color: #4CAF50;
      text-decoration: none;
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
      <p><a href="#">Privacy Policy</a> | <a href="#">Contact Support</a></p>
    </div>
  </div>
</body>

</html>
`;
};

export const welcomeEmailTemplate = (name) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Email</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .header {
      width: 100%;
      height: 200px;
      background-image: url('https://img.freepik.com/premium-photo/floral-welcome-sign-decorative-letters-with-vintage-floral-pattern_494851-8052.jpg?w=1380');
      background-size: cover;
      background-position: center;
      border-radius: 15px 15px 0 0;
    }

    h1 {
      color: #4CAF50;
      font-size: 28px;
      margin-bottom: 20px;
      margin-top: 20px;
    }

    p {
      color: #555;
      font-size: 16px;
      line-height: 1.6;
      margin: 20px 0;
    }

    .welcome-message {
      font-size: 20px;
      font-weight: bold;
      color: #333;
      margin-bottom: 30px;
    }

    .button {
      display: inline-block;
      background-color: #4CAF50;
      color: #fff;
      padding: 15px 30px;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 20px;
      font-size: 16px;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #43A047;
    }

    .footer {
      margin-top: 40px;
      text-align: center;
      color: #999;
      font-size: 12px;
    }

    .footer a {
      color: #4CAF50;
      text-decoration: none;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header"></div>

    <h1>Welcome ${name}!</h1>
    <p class="welcome-message">Congratulations! Your email has been successfully verified.</p>
    <p>We are excited to have you as part of our community. Here at iA Coder, we aim to provide you with the best experience possible.</p>
    
    <a href="https://darbesh.com" class="button">Get Started</a>

    <p>Feel free to explore, and if you have any questions, don't hesitate to reach out to our support team.</p>

    <div class="footer">
      <p>&copy; iA Coder | All rights reserved.</p>
      <p><a href="#">Privacy Policy</a> | <a href="#">Contact Support</a></p>
    </div>
  </div>
</body>

</html>
`;
};


export const resetPasswordTemplate = (name, resetLink) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    h1 {
      color: #ff6b6b;
      font-size: 26px;
      margin-bottom: 20px;
    }

    p {
      color: #555;
      font-size: 16px;
      line-height: 1.6;
      margin: 20px 0;
    }

    .reset-message {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin-bottom: 30px;
    }

    .button {
      display: inline-block;
      background-color: #ff6b6b;
      color: white;
      padding: 15px 30px;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 20px;
      font-size: 16px;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #e64949;
    }

    .footer {
      margin-top: 40px;
      text-align: center;
      color: #999;
      font-size: 12px;
    }

    .footer a {
      color: #ff6b6b;
      text-decoration: none;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Hey ${name}, did you forget your password? 🤔</h1>
    <p class="reset-message">No worries! Happens to the best of us! 💪</p>
    <p>Just click the button below, and you'll be back in business in no time.</p>
    
    <a href="${resetLink}" class="button">Reset Password</a>

    <p>If you didn’t request this, just ignore it and keep doing your thing! 🎉</p>

    <div class="footer">
      <p>&copy; iA Coder | We got your back.</p>
      <p><a href="#">Privacy Policy</a> | <a href="#">Contact Support</a></p>
    </div>
  </div>
</body>

</html>
`;
};


export const passwordResetSuccessTemplate = (name) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    h1 {
      color: #4CAF50;
      font-size: 26px;
      margin-bottom: 20px;
    }

    p {
      color: #555;
      font-size: 16px;
      line-height: 1.6;
      margin: 20px 0;
    }

    .success-message {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin-bottom: 30px;
    }

    .button {
      display: inline-block;
      background-color: #4CAF50;
      color: white;
      padding: 15px 30px;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 20px;
      font-size: 16px;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #43A047;
    }

    .footer {
      margin-top: 40px;
      text-align: center;
      color: #999;
      font-size: 12px;
    }

    .footer a {
      color: #4CAF50;
      text-decoration: none;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Success, ${name}!</h1>
    <p class="success-message">Your password has been successfully reset.</p>
    <p>We just wanted to let you know that everything is back on track! You can now log in using your new password.</p>

    <a href="https://darbesh.com/login" class="button">Login to Your Account</a>

    <p>If you didn't request this change, please contact our support team immediately.</p>

    <div class="footer">
      <p>&copy; iA Coder | All rights reserved.</p>
      <p><a href="#">Privacy Policy</a> | <a href="#">Contact Support</a></p>
    </div>
  </div>
</body>

</html>
`;
};
