import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { Box } from 'components/Box/Box';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';
import { TbCloudUpload } from 'react-icons/tb';

import { logOut, updateAvatar } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  UserWelcome,
  LogoutBtn,
  HiddenInput,
  AvatarBtn,
  ModalAvatarBtn,
  PreviewContainer,
  AvatarImg,
} from './UserMenu.styled';
import ModalMenu from 'components/ModalMenu';
import {
  ModalAvatarContent,
  CloseBtn,
} from 'components/ModalMenu/ModalMenu.styled';

const UserMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  const filePicker = useRef(null);
  const dispatch = useDispatch();
  const { user } = useAuth();

  const isMobile = useMediaQuery({
    query: '(min-device-width: 480px)',
  });

  const handleChange = e => {
    const chosenImg = e.target.files[0];
    if (!e.target.files.length || !chosenImg) {
      setSelectedFile(null);
      toast.warning('Choose an image to change your avatar!');
      return;
    }
    setSelectedFile(chosenImg);

    const reader = new FileReader();
    reader.onload = e => {
      setPreviewImg(e.target.result);
    };
    reader.readAsDataURL(chosenImg);
  };

  const handleUpload = e => {
    if (!selectedFile) {
      console.log('CHOOSE FILE PLS');
      return;
    }
    const data = new FormData();
    data.append('avatar', selectedFile);
    dispatch(updateAvatar(data));
  };

  const handleModalClose = () => {
    setShowModal(!showModal);
    setSelectedFile(null);
    setPreviewImg(null);
  };

  const handleDeleteImg = e => {
    setSelectedFile(null);
    setPreviewImg(null);
  };

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

        {isMobile && (
          <AvatarBtn onClick={() => setShowModal(!showModal)}>
            <AvatarImg src={user.avatarURL} alt={user.email} />
          </AvatarBtn>
        )}

        <UserWelcome>Welcome, {user.email}!</UserWelcome>
      </Box>

      <LogoutBtn
        fontSize={[3, 4, 5, 5]}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </LogoutBtn>

      {showModal && (
        <ModalMenu onClose={handleModalClose}>
          <ModalAvatarContent>
            <CloseBtn closeModal type="button" onClick={handleModalClose}>
              &times;
            </CloseBtn>

            <Box display="inline-flex" flexDirection="column" gridGap={4}>
              <ModalAvatarBtn onClick={() => filePicker.current.click()}>
                Choose an avatar
              </ModalAvatarBtn>

              <HiddenInput
                ref={filePicker}
                type="file"
                name="avatar"
                onChange={handleChange}
                accept="image/*,.png,.jpg,.gif,.web"
              />

              {selectedFile && (
                <ModalAvatarBtn loadBtn onClick={handleUpload}>
                  <span>Upload</span>
                  <TbCloudUpload size={20} />
                </ModalAvatarBtn>
              )}
            </Box>

            {selectedFile && previewImg && (
              <PreviewContainer>
                <CloseBtn closePreview onClick={handleDeleteImg}>
                  &times;
                </CloseBtn>
                <img
                  display="block"
                  width="120px"
                  src={previewImg}
                  alt="Preview"
                />
              </PreviewContainer>
            )}
          </ModalAvatarContent>
        </ModalMenu>
      )}
    </Box>
  );
};

export default UserMenu;
