import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { FcButtingIn } from 'react-icons/fc';
import { Box } from 'components/Box/Box';
import { useMediaQuery } from 'react-responsive';

import { logOut, updateAvatar } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserWelcome, LogoutBtn } from './UserMenu.styled';

const UserMenu = () => {
  const [selectedFile, setSelectedFile] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();

  console.log("user.avatarURL", user.avatarURL);
  
  const isMobile = useMediaQuery({
    query: '(min-device-width: 480px)',
  });

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // console.log(e.currentTarget.elements);
  //   const { avatar } = e.currentTarget.elements;
  //   // console.log(image.files[0]);
  //   const data = new FormData();
  //   data.append("avatar", avatar.files[0]);
  //   console.log(data);
  //   dispatch(updateAvatar(data));
  // }

  const handleChange = e => {
    // console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  }

  const handleUpload = e => {
    // e.preventDefault();
    if (!selectedFile) {
      console.log("CHOOSE FILE PLS");
      return;
    }
    const data = new FormData();
    data.append("avatar", selectedFile);
    dispatch(updateAvatar(data));
  }

  return (
    <Box display="inline-flex" flexDirection="column" alignItems="flex-end">
      <Box
        mb={4}
        display="flex"
        alignItems="center"
        gridGap={4}
        fontSize={[3, 4, 5, 6]}
      >
        {/* <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <input type="file" name="avatar" />
          <button type='submit'>Load</button>
        </form> */}

        {/* {isMobile && <FcButtingIn size={40} />} */}
        {isMobile && <img src={user.avatarURL} alt={user.email} />}
        <UserWelcome>Welcome, {user.email}!</UserWelcome>
      </Box>

      <LogoutBtn
        fontSize={[3, 4, 5, 5]}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </LogoutBtn>

      <>
        <input type="file" name="avatar" onChange={handleChange}/>
        <button onClick={handleUpload}>Load</button>
      </>
    </Box>
  );
};

export default UserMenu;
