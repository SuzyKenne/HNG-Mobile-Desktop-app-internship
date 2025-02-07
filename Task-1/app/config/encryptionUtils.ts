export const encrypt = (text: string, key: string): string => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i) + key.charCodeAt(i % key.length);
    result += String.fromCharCode(charCode);
  }
  return result;
};

export const decrypt = (encryptedText: string, key: string): string => {
  let result = '';
  for (let i = 0; i < encryptedText.length; i++) {
    const charCode =
      encryptedText.charCodeAt(i) - key.charCodeAt(i % key.length);
    result += String.fromCharCode(charCode);
  }
  return result;
};
