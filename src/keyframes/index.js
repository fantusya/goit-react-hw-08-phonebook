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

export const rotateY = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

export const heartbeat = keyframes`
   from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(1.2);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
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
