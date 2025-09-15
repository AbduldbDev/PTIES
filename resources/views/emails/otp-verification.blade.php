<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OTP Verification Code</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet" />
    <style>
        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            font-family: "Poppins", sans-serif !important;
        }

        table,
        td {
            border-collapse: collapse;
        }

        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
        }

        body {
            background-color: #f5f7fa;
            margin: 0;
            padding: 0;
            color: #333;
            font-family: "Poppins", sans-serif !important;
        }

        .email-container {
            width: 100%;
            background-color: #f3f3f3;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .header {
            background: linear-gradient(to right, #052675, #083ec1);
            padding: 20px 0;
            text-align: center;
        }

        .logo {
            max-width: 180px;
        }

        .content {
            padding: 30px;
            background-color: #ffffff;
        }

        h1 {
            color: #052675;
            font-size: 24px;
            text-align: center;
            margin: 0 0 20px 0;
            font-family: "Poppins", sans-serif !important;
        }

        h2 {
            color: #083ec1;
            font-size: 20px;
            margin: 25px 0 15px 0;
            padding-bottom: 10px;
            border-bottom: 2px solid #f0f5ff;
            font-family: "Poppins", sans-serif !important;
        }

        p {
            color: #444;
            font-size: 16px;
            line-height: 1.6;
            margin: 0 0 15px 0;
            font-family: "Poppins", sans-serif !important;
        }

        .alert-box {
            background-color: #f0f7ff;
            border-left: 4px solid #052675;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }

        .otp-container {
            text-align: center;
            margin: 30px 0;
        }

        .otp-code {
            font-size: 48px;
            font-weight: 700;
            letter-spacing: 8px;
            color: #052675;
            background-color: #f0f5ff;
            padding: 20px;
            border-radius: 8px;
            display: inline-block;
            margin: 15px 0;
            box-shadow: 0 4px 10px rgba(5, 38, 117, 0.15);
        }

        .expiry-notice {
            color: #e74c3c;
            font-weight: 500;
            margin-top: 10px;
        }

        .footer {
            background: linear-gradient(to right, #052675, #083ec1);
            padding: 25px;
            text-align: center;
            color: #ffffff;
            font-family: "Poppins", sans-serif !important;
        }

        .footer p {
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 15px;
            font-size: 14px;
            font-family: "Poppins", sans-serif !important;
        }

        @media screen and (max-width: 600px) {
            .content {
                padding: 20px;
            }

            h1 {
                font-size: 22px;
            }

            h2 {
                font-size: 18px;
            }

            .otp-code {
                font-size: 36px;
                letter-spacing: 6px;
                padding: 15px;
            }
        }
    </style>
</head>

<body style="background-color: #ffffff">
    <center class="container">
        <table class="email-container" width="100%" cellpadding="0" cellspacing="0" border="0">
            <!-- Header -->
            <tr>
                <td class="header"></td>
            </tr>

            <!-- Content -->
            <tr>
                <td class="content">
                    <h1>OTP Verification Code</h1>
                    <p>Hello, Mabuhay!</p>
                    <p>
                        You've requested a One-Time Password (OTP) to verify your
                        identity. Use the code below to complete your verification
                        process.
                    </p>

                    <!-- OTP Display -->
                    <div class="otp-container">
                        <div class="otp-code">{{ $otp }}</div>
                        <p class="expiry-notice">This code will expire in 10 minutes.</p>
                    </div>

                    <!-- Alert Box -->
                    <div class="alert-box">
                        <p>
                            <strong>⚠️ Security Notice:</strong> For your protection, never
                            share this code with anyone. Our team will never ask for your
                            OTP code.
                        </p>
                    </div>

                    <p>
                        If you didn't request this code, please ignore this email or
                        contact our support team if you have concerns about your account
                        security.
                    </p>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td class="footer">
                    <p>
                        Municipality of Pakil, Laguna, Philippines<br />
                        <a href="tel:+63491234567" style="color: #fff">(049) 123-4567</a>
                        |
                        <a href="mailto:info@pakil.gov.ph" style="color: #fff">info@pakil.gov.ph</a>
                    </p>
                    <p>&copy; {{ now()->year }} Municipality of Pakil. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </center>
</body>

</html>
