export const showShitMessage = (message, isFullscreen, backgroundColor, fontColor) => {
  removeShitMessage();
  const elem = document.createElement('div');
  const fontC = fontColor || 'red';
  const bgC = backgroundColor || 'yellow';
  const height = isFullscreen ? '100vh' : '8rem';
  elem.style.cssText = `position: fixed;  top: 0; display: flex; width: 100vw; animation: blinker 1s linear infinite; margin: auto; height: ${height}; text-align: center; font-size: 4rem; font-weight: bold; z-index: 100000000000000000; background: ${bgC}; color: ${fontC}`;
  elem.id = 'shitMessage';
  elem.innerHTML = `<p style="margin: auto;">${message}</p>` || '';

  const style = document.createElement('style');
  style.id = 'shitStyle';
  style.innerHTML = '@keyframes blinker { 50% {  opacity: 0;  }}';
  document.body.appendChild(elem);
  document.body.appendChild(style);
};

export const removeShitMessage = () => {
  const message = document.getElementById('shitMessage');
  if (message) {
    document.body.removeChild(message);
  }
  const style = document.getElementById('shitStyle');
  if (style) {
    document.body.removeChild(style);
  }
};
