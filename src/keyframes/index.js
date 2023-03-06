import { keyframes } from 'styled-components';

export const shakeBottom = keyframes`
    0%,
    100% {
      transform: rotate(0deg);
      transform-origin: 50% 100%;
    }
    10% {
      transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
      transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
      transform: rotate(4deg);
    }
    80% {
      transform: rotate(-2deg);
    }
    90% {
      transform: rotate(2deg);
    }`;

export const rotateCenter = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }`;

export const flipLeft = keyframes`
    0% {
      transform: translateX(0) rotateY(0);
      transform-origin: 0% 50%;
    }
    100% {
      transform: translateX(-100%) rotateY(-180deg);
      transform-origin: 100% 0%;
    }
    /* 100% {
    transform: translateX(0) rotateY(-360deg);
    transform-origin: 0% 50%;
  } */
`;

export const modalMenuEmersion = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }`;

export const avatarModalEmersion = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }`;

export const previewImgEmersion = keyframes`
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }`;
