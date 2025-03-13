import * as React from 'react';
import Container from '../components/Container';
import { Typography, useMediaQuery } from '@mui/material';
import theme from '../theme';

export const PrivacyPolicyPage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container>
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        style={{ textAlign: 'center', paddingBottom: 24 }}
      >
        Privacy Policy
      </Typography>
      <Typography>
        <span style={{ fontWeight: 'bold' }}>Effective Date:</span> March 12,
        2025
        <br />
        We value your privacy and are committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, disclose,
        and safeguard your information when you visit our website, use our
        services, or engage with us in other ways.
      </Typography>
      <Typography variant="subtitle1" style={{ paddingTop: 16 }}>
        1. Information We Collect
      </Typography>
      <Typography>
        We collect various types of information to provide and improve our
        services. This includes:
        <br />-{' '}
        <span style={{ fontWeight: 'bold' }}>Personal Information:</span>
        When you use our website, register an account, make a purchase, or
        contact us, we may collect personal details such as your name, email
        address, phone number, and billing information.
        <br />-{' '}
        <span style={{ fontWeight: 'bold' }}>
          Cookies and Tracking Technologies:
        </span>
        We use cookies, web beacons, and similar technologies to enhance your
        experience and analyze site usage.
      </Typography>
      <Typography variant="subtitle1" style={{ paddingTop: 16 }}>
        2. How We Use Your Information
      </Typography>
      <Typography>
        We use the information we collect for various purposes, including:
        <br />- To process orders, transactions, and payments.
        <br />- To personalize your experience on our website.
        <br />- To improve the functionality and performance of our website. -
        To respond to your inquiries, requests, and customer support needs.
      </Typography>
      <Typography variant="subtitle1" style={{ paddingTop: 16 }}>
        3. How We Share Your Information
      </Typography>
      <Typography>
        We do not sell, rent, or trade your personal information to third
        parties. However, we may share your information in the following
        situations:
        <br />- <span style={{ fontWeight: 'bold' }}>Service Providers:</span>
        We may share your information with third-party vendors who help us run
        our business (e.g., payment processors, email providers, analytics
        services).
        <br />- <span style={{ fontWeight: 'bold' }}>Legal Requirements:</span>
        We may disclose your information to comply with legal obligations,
        respond to legal claims, or protect our rights and safety.
        <br />- <span style={{ fontWeight: 'bold' }}>Business Transfers:</span>
        In the event of a merger, acquisition, or sale of assets, your
        information may be transferred as part of that process.
      </Typography>
      <Typography variant="subtitle1" style={{ paddingTop: 16 }}>
        4. Data Security
      </Typography>
      <Typography>
        We use industry-standard security measures to protect your personal
        information. However, no method of transmission over the internet or
        electronic storage is 100% secure. While we strive to protect your data,
        we cannot guarantee its absolute security.
      </Typography>
      <Typography variant="subtitle1" style={{ paddingTop: 16 }}>
        5. Your Rights and Choices
      </Typography>
      <Typography>
        You have the following rights regarding your personal data:
        <br />-{' '}
        <span style={{ fontWeight: 'bold' }}>Access and Correction:</span>
        You can request access to or correction of your personal information.
        <br />- <span style={{ fontWeight: 'bold' }}>Data Deletion:</span>
        You may request that we delete your personal information, subject to
        certain exceptions. To exercise any of these rights, please contact us
        at anjorlan@icloud.com.
      </Typography>
      <Typography variant="subtitle1" style={{ paddingTop: 16 }}>
        6. Third-Party Links
      </Typography>
      <Typography>
        Our website may contain links to third-party sites. We are not
        responsible for the privacy practices or content of these external
        sites. We encourage you to review the privacy policies of any
        third-party websites you visit.
      </Typography>
      <Typography variant="subtitle1" style={{ paddingTop: 16 }}>
        7. Children’s Privacy
      </Typography>
      <Typography>
        Our website is not intended for children under the age of 13. We do not
        knowingly collect personal information from children. If we become aware
        that we have collected personal information from a child under 13, we
        will take steps to delete that information.
      </Typography>
      <Typography variant="subtitle1" style={{ paddingTop: 16 }}>
        8. Changes to This Privacy Policy
      </Typography>
      <Typography>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date. We encourage you to
        review this policy periodically to stay informed about how we are
        protecting your information.
      </Typography>
      <Typography variant="subtitle1" style={{ paddingTop: 16 }}>
        9. Contact Us
      </Typography>
      <Typography>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at:
        <br />
        Anjela & Enrique
        <br />
        Email: anjorlan@icloud.com
      </Typography>
    </Container>
  );
};
