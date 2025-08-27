<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet" />
    <style>
        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            font-family: 'Poppins', sans-serif !important;
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
            font-family: 'Poppins', sans-serif !important;
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
            font-family: 'Poppins', sans-serif !important;
        }

        h2 {
            color: #083ec1;
            font-size: 20px;
            margin: 25px 0 15px 0;
            padding-bottom: 10px;
            border-bottom: 2px solid #f0f5ff;
            font-family: 'Poppins', sans-serif !important;
        }

        p {
            color: #444;
            font-size: 16px;
            line-height: 1.6;
            margin: 0 0 15px 0;
            font-family: 'Poppins', sans-serif !important;
        }

        .alert-box {
            background-color: #f0f7ff;
            border-left: 4px solid #052675;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }

        .submission-details {
            background-color: #f9fafc;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }

        .detail-row {
            display: flex;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e5e7eb;
        }

        .detail-row:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
        }

        .detail-label {
            width: 100px;
            font-weight: 600;
            color: #052675;
        }

        .detail-value {
            flex: 1;
        }

        .message-content {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            border-left: 3px solid #083ec1;
            margin-top: 10px;
            font-family: 'Poppins', sans-serif !important;
        }

        .footer {
            background: linear-gradient(to right, #052675, #083ec1);
            padding: 25px;
            text-align: center;
            color: #ffffff;
            font-family: 'Poppins', sans-serif !important;
        }

        .footer p {
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 15px;
            font-size: 14px;
            font-family: 'Poppins', sans-serif !important;
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

            .detail-row {
                flex-direction: column;
            }

            .detail-label {
                width: 100%;
                margin-bottom: 5px;
            }
        }
    </style>
</head>

<body style="background-color: #ffffff">
    <center class="container">
        <table class="email-container" width="100%" cellpadding="0" cellspacing="0" border="0">
            <!-- Header -->
            <tr>
                <td class="header">
                    {{-- <img src="{{ asset('User/Layout/Logo.png') }}" alt="Municipality of Pakil" class="logo" /> --}}
                </td>
            </tr>

            <!-- Content -->
            <tr>
                <td class="content">
                    <h1>New Contact Form Submission</h1>
                    <p>Hello Team,</p>
                    <p>A new message has been received through the website contact form. Please review the details below
                        and take appropriate action.</p>

                    <!-- Alert Box -->
                    <div class="alert-box">
                        <p><strong>⚠️ Action Required:</strong> This message requires a response within 24–48 hours
                            according to our customer service policy.</p>
                    </div>

                    <!-- Submission Details -->
                    <h2>Submission Details</h2>
                    <div class="submission-details">
                        <div class="detail-row">
                            <div class="detail-label">Date:</div>
                            <div class="detail-value">{{ now()->format('F d, Y h:i A') }}</div>
                        </div>

                        <div class="detail-row">
                            <div class="detail-label">From:</div>
                            <div class="detail-value">{{ $formData['name'] }}</div>
                        </div>

                        <div class="detail-row">
                            <div class="detail-label">Email:</div>
                            <div class="detail-value">{{ $formData['email'] }}</div>
                        </div>

                        <div class="detail-row">
                            <div class="detail-label">Subject:</div>
                            <div class="detail-value">{{ $formData['subject'] }}</div>
                        </div>

                        <div class="detail-row">
                            <div class="detail-label">Message:</div>
                            <div class="detail-value">
                                <div class="message-content">
                                    {!! nl2br(e($formData['message'])) !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td class="footer">
                    <p>
                        Municipality of Pakil, Laguna, Philippines<br />
                        <a href="tel:+63491234567" style="color:#fff">(049) 123-4567</a> |
                        <a href="mailto:info@pakil.gov.ph" style="color:#fff">info@pakil.gov.ph</a>
                    </p>
                    <p>&copy; {{ now()->year }} Municipality of Pakil. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </center>
</body>

</html>
