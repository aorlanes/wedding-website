import * as React from 'react';
import { Typography, Grid, Link, Box, useMediaQuery } from '@mui/material';
import Container from '../components/Container';
import theme from '../theme';

const TermsPage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container>
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        style={{ textAlign: 'center', paddingBottom: 24 }}
      >
        Terms of Service
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        <strong>Effective Date:</strong> March 12, 2025
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        1. Acceptance of Terms
      </Typography>
      <Typography>
        By accessing or using our website and Services, you acknowledge that you
        have read, understood, and agree to be bound by these Terms. These Terms
        apply to all visitors, users, and others who access or use the Services.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        2. Changes to Terms
      </Typography>
      <Typography>
        We may update or change these Terms at any time without prior notice.
        Any changes will be posted on this page with an updated "Effective
        Date." Your continued use of our website after any changes to the Terms
        constitutes your acceptance of the updated Terms.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        3. Use of Our Services
      </Typography>
      <Typography>
        You agree to use our website and Services only for lawful purposes and
        in accordance with these Terms. You may not:
      </Typography>
      <Typography>
        - Use the website for any unlawful purpose or in a manner that could
        damage, disable, overburden, or impair the website.
      </Typography>
      <Typography>
        - Interfere with or disrupt the website or servers or networks connected
        to the website.
      </Typography>
      <Typography>
        - Attempt to gain unauthorized access to any portion of the website or
        any other systems or networks connected to the website.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        4. Account Registration
      </Typography>
      <Typography>
        If the Services require registration, you agree to provide accurate,
        current, and complete information. You are responsible for maintaining
        the confidentiality of your account login details and for all activities
        that occur under your account.
      </Typography>
      <Typography>
        You agree to immediately notify us of any unauthorized use of your
        account.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        5. Privacy
      </Typography>
      <Typography>
        Your use of our Services is also governed by our{' '}
        <Link href="/privacy" rel="noopener noreferrer">
          Privacy Policy
        </Link>
        , which outlines how we collect, use, and protect your personal
        information. Please review our Privacy Policy for more information.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        6. Payment Terms (If Applicable)
      </Typography>
      <Typography>
        If you purchase products or services through our website, you agree to
        provide valid payment information and to pay all applicable fees. Prices
        are subject to change at any time, but any changes will not affect
        already completed transactions.
      </Typography>
      <Typography>
        You authorize us to charge the payment method you provide for the amount
        due, including applicable taxes and shipping fees.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        7. Intellectual Property
      </Typography>
      <Typography>
        All content on this website, including text, graphics, logos, images,
        and software, is the property of the-veras.web.app or its licensors and
        is protected by copyright, trademark, and other intellectual property
        laws. You may not use, reproduce, distribute, or display any content
        from the website without our prior written permission.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        8. Limitation of Liability
      </Typography>
      <Typography>
        To the fullest extent permitted by law, the-veras.web.app and its
        affiliates, employees, agents, and partners are not liable for any
        indirect, incidental, special, consequential, or punitive damages
        arising from your use of or inability to use the website or Services,
        including errors or omissions in content or data loss.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        9. Indemnification
      </Typography>
      <Typography>
        You agree to indemnify, defend, and hold harmless the-veras.web.app and
        its affiliates, employees, agents, and partners from any claims,
        damages, liabilities, costs, and expenses (including attorneys' fees)
        arising from your use of the website, violation of these Terms, or
        infringement of any third-party rights.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        10. Termination
      </Typography>
      <Typography>
        We reserve the right to suspend or terminate your access to the website
        and Services at our sole discretion if you violate these Terms or engage
        in activities that harm the website or other users. Upon termination,
        you must cease all use of the website and Services.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        11. Governing Law
      </Typography>
      <Typography>
        These Terms will be governed by and construed in accordance with the
        laws of California. Any disputes arising from or related to these Terms
        will be resolved exclusively in the courts of California.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        12. Dispute Resolution
      </Typography>
      <Typography>
        In the event of a dispute, you agree to attempt to resolve the issue
        through informal negotiation. If a resolution is not reached, you agree
        to resolve the dispute through binding arbitration.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        13. Third-Party Links
      </Typography>
      <Typography>
        Our website may contain links to third-party websites or services that
        are not controlled or owned by the-veras.web.app. We are not responsible
        for the content, privacy policies, or practices of any third-party
        websites. We encourage you to review the terms and policies of any
        third-party site you visit.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        14. No Warranty
      </Typography>
      <Typography>
        The website and Services are provided "as is" and "as available,"
        without any warranties of any kind, either express or implied. We do not
        warrant that the website or Services will be uninterrupted, error-free,
        or free from viruses or other harmful components.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        15. Severability
      </Typography>
      <Typography>
        If any provision of these Terms is found to be invalid or unenforceable,
        the remaining provisions will remain in full force and effect.
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        style={{ paddingTop: 16 }}
      >
        16. Contact Us
      </Typography>
      <Typography>
        If you have any questions or concerns about these Terms, please contact
        us at:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography>Anjela & Enrique</Typography>
        <Typography>Email: anjorlan@icloud.com</Typography>
      </Box>
    </Container>
  );
};

export default TermsPage;
