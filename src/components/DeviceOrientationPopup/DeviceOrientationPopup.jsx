import React, { useLayoutEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import SvgImage from '../SvgImage/SvgImage';
import './DeviceOrientationPopup.css';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const DeviceOrientationPopup = () => {
  const [width, height] = useWindowSize();
  if (!isMobile || height > width) {
    return '';
  }

  return (
    <div className="device-orientation-popup">
      <div className="device-orientation-popup__image">
        <SvgImage classText="svg-image" id="rotateDevice" />
      </div>
    </div>
  );
};

export default DeviceOrientationPopup;
