export const isMobile = () => {
  const sUserAgent = navigator.userAgent.toLowerCase();
  const isMobile = /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent);
  return isMobile;
};
