import React from 'react';
import { Block } from 'shared/components';

export default () => (
  <Block title="Math" className="_mt30">
    <div className="_fx">
      <div className="_grow">Numération</div>
      <div className="status">
        <input type="radio" /> Non travaillée
        <input type="radio" /> A travaillée
        <input type="radio" /> Validée
      </div>
    </div>
  </Block>
);
