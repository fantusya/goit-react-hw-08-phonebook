import { FcApprove } from 'react-icons/fc';

import { Box } from 'components/Box/Box';
import { Container } from 'constants/GlobalStyle';
import Footer from 'components/Footer';
import {
  MessageBox,
  EmphasizedMessage,
  MessageText,
} from './SuccessRegister.styled';

const SuccessRegister = () => {
  return (
    <>
      <Box as="main" flex="1 1 auto">
        <Box as="section" textAlign="center" py={6}>
          <Container>
            <MessageBox>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gridGap={3}
                mb={4}
              >
                <MessageText>Registration is successful!</MessageText>
                <FcApprove size={25} />
              </Box>
              <MessageText>
                Please check your email and{' '}
                <EmphasizedMessage>verify</EmphasizedMessage> it!
              </MessageText>
            </MessageBox>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SuccessRegister;
