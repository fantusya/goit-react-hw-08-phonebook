import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { device } from './breakpoints';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: #000428;
    background: linear-gradient(to left, #004e92, #000428);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;

  margin-left: auto;
  margin-right: auto;

  @media ${device.desktop} {
    padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
  }
`;
