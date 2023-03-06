import { Box } from 'components/Box/Box';
import { MessageBox, EmphasizedMessage } from './SuccessRegister.styled';
import { Container } from 'constants/GlobalStyle';
import { FcApprove } from 'react-icons/fc';

const SuccessRegister = () => {
  return (
    <main>
      <Box as="section" textAlign="center" pt={6}>
        <Container>
          <MessageBox>
            <Box
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              gridGap={3}
              mb={4}
            >
              <p>Registration is successful!</p>
              <FcApprove size={25} />
            </Box>
            <p>
              Please check your email and{' '}
              <EmphasizedMessage>verify</EmphasizedMessage> it!
            </p>
          </MessageBox>
        </Container>
      </Box>
    </main>
  );
};

export default SuccessRegister;
