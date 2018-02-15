import React from 'react';
import Block from 'shared/components/block/Block';

export default () => (
  <Block title="Math" className="mt30">
    <div className="skill-status">
      <div className="skill-name">Numération</div>
      <div className="status">
        <input type="radio" /> Non travaillée
        <input type="radio" /> A travaillée
        <input type="radio" /> Validée
      </div>
    </div>
  </Block>
);
