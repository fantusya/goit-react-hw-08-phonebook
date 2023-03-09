import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

import { Box } from 'components/Box/Box';
import { Container } from 'constants/GlobalStyle';
import { FooterMessage, SocialsLink } from './Footer.styled';

const Footer = () => {
  return (
    <Box
      as="footer"
      py={4}
      textAlign={['center', 'center', 'left']}
      borderTop="1px solid"
      borderTopColor="semiSilver"
    >
      <Container>
        <FooterMessage>Feel free to contact me:</FooterMessage>
        <Box
          as="ul"
          display="flex"
          alignItems="center"
          justifyContent={['center', 'center', 'left']}
          gridGap={5}
        >
          <li>
            <SocialsLink
              href="https://github.com/fantusya"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub size={28} color="inherit" />
            </SocialsLink>
          </li>
          <li>
            <SocialsLink
              href="https://www.linkedin.com/in/anastasiia-guba/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin size={28} color="inherit" />
            </SocialsLink>
          </li>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
