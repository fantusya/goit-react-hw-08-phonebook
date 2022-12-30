import { theme } from './theme';

export const device = {
  miniMobile: `(max-width: ${theme.breakpoints[1]})`,
  mobile: `(min-width: ${theme.breakpoints[1]})`,
  tablet: `(min-width: ${theme.breakpoints[2]})`,
  desktop: `(min-width: ${theme.breakpoints[3]})`,
};
