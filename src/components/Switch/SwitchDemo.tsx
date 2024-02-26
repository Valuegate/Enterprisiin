import React from 'react';
import * as Switch from '@radix-ui/react-switch';

const SwitchDemo = () => (
  <form>
    {/* <div className="flex items-center"> */}
      {/* <label className="text-white text-[15px] leading-none pr-[15px]" htmlFor="notification">
        Airplane mode
      </label> */}
      <Switch.Root
        className="w-[32px] h-[24px] bg-contrast-10 rounded-full relative data-[state=checked]:bg-blue-base outline-none cursor-default"
        id="notification"
        style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
      >
        <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[14px]" />
      </Switch.Root>
    {/* </div> */}
  </form>
);

export default SwitchDemo;