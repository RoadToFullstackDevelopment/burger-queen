import React from 'react';
import MenuButton from './MenuButton';

const MenuButtonGroup = ({ names, handleClick, values, myStyle }) => (
    <div className="container">
      <div>
        <MenuButton
          passedValue={values[0]}
          btnText={names[0]}
          action={handleClick}
          myStyle={myStyle}
        />
      </div>
      <div>
        <MenuButton
          passedValue={values[1]}
          btnText={names[1]}
          action={handleClick}
          myStyle={myStyle}
        />
      </div>
      <div>
        <MenuButton
          passedValue={values[2]}
          btnText={names[2]}
          action={handleClick}
          myStyle={myStyle}
        />
    </div>
  </div>
);

export default MenuButtonGroup;