import React from 'react';
import Block from './Block';
import DangerButton from './../button/DangerButton';
import Paragraph from './../paragraph/Paragraph';

export default ({ title, warningText, handleDelete, className }) => (
  <Block
    title={title}
    className={'_b1 _bc-red ' + (className ? className : '')}
  >
    <div className="_fx _items-center">
      <div className="_grow">
        <Paragraph>{warningText}</Paragraph>
      </div>
      <div>
        <DangerButton title="Supprimer" onClick={handleDelete} />
      </div>
    </div>
  </Block>
);
