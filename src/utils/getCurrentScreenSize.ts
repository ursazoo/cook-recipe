export default function getCurrentScreenSize() {
  const windowWidth = window.innerWidth;

  const sizeMap = {
    XS: { min: '375px', max: '766px' },
    SM: { min: '640px', max: '767px' },
    MD: { min: '768px', max: '1023px' },
    LG: { min: '1024px', max: '1279px' },
    XL: { min: '1280px', max: '1535px' },
    '2XL': { min: '1536px' }
  };

  return Object.keys(sizeMap).find(key => {
    const { min, max } = sizeMap[key];

    if (min && max) {
      return windowWidth >= parseInt(min) && windowWidth <= parseInt(max);
    } else if (min) {
      return windowWidth >= parseInt(min);
    } else if (max) {
      return windowWidth <= parseInt(max);
    }
  });
}