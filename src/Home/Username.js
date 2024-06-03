export const extractUsername = (url) => {
    try {
      const urlObj = new URL(url);
      return urlObj.pathname.split('/')[1];
    } catch (error) {
      // console.error("Invalid URL");
      return null;
    }
  };
  