import React from 'react';

type ButtonProps = {
  text: string
  icon: string
}

export default function Button({ text, icon }: ButtonProps) {
  return (
    <button type="button">{text}</button>
  );
}
