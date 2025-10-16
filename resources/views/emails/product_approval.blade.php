<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Product Approval Notification</title>
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

        body {
            background-color: #f5f7fa;
            margin: 0;
            padding: 0;
            color: #333;
            font-family: "Poppins", sans-serif !important;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
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
            font-weight: 600;
        }

        p {
            color: #444;
            font-size: 16px;
            line-height: 1.6;
            margin: 0 0 15px 0;
        }

        .alert-box {
            background-color: #e9fbe9;
            border-left: 4px solid #1a7f37;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }

        .details-box {
            background-color: #f9fafc;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
        }

        .detail-row {
            display: flex;
            margin-bottom: 12px;
        }

        .detail-label {
            width: 130px;
            font-weight: 600;
            color: #052675;
        }

        .detail-value {
            flex: 1;
        }

        .footer {
            background: linear-gradient(to right, #052675, #083ec1);
            padding: 25px;
            text-align: center;
            color: #ffffff;
        }

        .footer p {
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 15px;
            font-size: 14px;
        }

        a.button {
            display: inline-block;
            background-color: #083ec1;
            color: #ffffff !important;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 50px;
            margin-top: 15px;
            font-weight: 500;
            transition: background 0.3s ease;
        }

        a.button:hover {
            background-color: #052675;
        }

        @media screen and (max-width: 600px) {
            .content {
                padding: 20px;
            }

            h1 {
                font-size: 22px;
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

<body>
    <center class="container">
        <table class="email-container" width="100%" cellpadding="0" cellspacing="0" border="0">
            <!-- Header -->
            <tr>
                <td class="header"></td>
            </tr>

            <!-- Content -->
            <tr>
                <td class="content">
                    <h1>Your Product Has Been Approved!</h1>
                    <p>Hi <strong>{{ $seller['owner_name'] }}</strong>,</p>
                    <p>
                        Great news! Your product submission to
                        <strong>PTIES (Pakil Tourism Information & Engagement System)</strong>
                        has been reviewed and approved by our team.
                    </p>

                    <div class="alert-box">
                        <p>
                            🎉 Your product is now live on the marketplace and visible to
                            all visitors and tourists browsing the platform.
                        </p>
                    </div>

                    <div class="details-box">
                        <div class="detail-row">
                            <div class="detail-label">Product Name:</div>
                            <div class="detail-value">{{ $product['product_name'] }}</div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-label">Category:</div>
                            <div class="detail-value">{{ $product['category'] }}</div>
                        </div>
                    </div>

                    <p>
                        You can now view your product listing and continue managing your
                        inventory, pricing, and images through your seller dashboard.
                    </p>

                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td class="footer">
                    <p>
                        PTIES – Pakil Tourism Information & Engagement System<br />
                        Municipality of Pakil, Laguna, Philippines<br />
                        <a href="tel:+634915571884" style="color: #fff">(049) 557–1884</a>
                        |
                        <a href="mailto:ptiesteam@gmail.com" style="color: #fff">ptiesteam@gmail.com</a>
                    </p>
                    <p>&copy; {{ now()->year }} Pakil Tourism. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </center>
</body>

</html>
