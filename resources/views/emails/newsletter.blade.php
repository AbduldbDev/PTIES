<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Event in Pakil</title>
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

        .event-highlight {
            background-color: #f0f7ff;
            border-left: 4px solid #052675;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }

        .event-details {
            background-color: #f9fafc;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 25px;
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
            width: 120px;
            font-weight: 600;
            color: #052675;
        }

        .detail-value {
            flex: 1;
        }

        .cta-button {
            display: inline-block;
            background: linear-gradient(to right, #052675, #083ec1);
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 600;
            margin: 20px 0;
            text-align: center;
        }

        .event-description {
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

        .unsubscribe-link {
            color: rgba(255, 255, 255, 0.8);
            font-size: 12px;
            margin-top: 20px;
            display: block;
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

            .cta-button {
                display: block;
                width: 100%;
                box-sizing: border-box;
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

                </td>
            </tr>

            <!-- Content -->
            <tr>
                <td class="content">
                    <h1>New Event Announcement</h1>
                    <p>Hello Pakil Community,</p>
                    <p>We're excited to announce a new event happening in our municipality! Mark your calendars and join
                        us for this special occasion.</p>

                    <!-- Event Highlight -->
                    <div class="event-highlight">
                        <p><strong>🎉 New Event Alert!</strong> Don't miss this opportunity to connect with our
                            community and celebrate together.</p>
                    </div>

                    <!-- Event Details -->
                    <h2>Event Details</h2>
                    <div class="event-details">
                        <div class="detail-row">
                            <div class="detail-label">Event Name:</div>
                            <div class="detail-value">{{ $event->title }}</div>
                        </div>

                        <div class="detail-row">
                            <div class="detail-label">Start Date:</div>
                            <div class="detail-value">
                                {{ \Carbon\Carbon::parse($event->start_date)->format('F d, Y') }}</div>
                        </div>

                        <div class="detail-row">
                            <div class="detail-label">End Date:</div>
                            <div class="detail-value">
                                {{ \Carbon\Carbon::parse($event->end_date)->format('F d, Y') }}</div>
                        </div>

                        @if ($event->description)
                            <div class="detail-row">
                                <div class="detail-label">Description:</div>
                                <div class="detail-value">
                                    {!! nl2br(e($event->description)) !!}
                                </div>
                            </div>
                        @endif
                    </div>

                    <!-- Call to Action -->
                    <center>
                        <a href="{{ env('APP_URL') . '/events/details/' . $event->id }}" class="cta-button">
                            View Event Details
                        </a>
                    </center>

                    <p>We hope to see you there! Share this event with friends and family who might be interested.</p>

                    <p>Stay connected with Pakil,<br>
                        <strong>The Municipality of Pakil Team</strong>
                    </p>
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
                    {{-- <a href="{{ $unsubscribeLink }}" class="unsubscribe-link">Unsubscribe from our newsletter</a> --}}
                </td>
            </tr>
        </table>
    </center>
</body>

</html>
