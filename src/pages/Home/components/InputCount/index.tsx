import { Minus, Plus } from 'phosphor-react';
import { InputCountContainer } from './styles';
import { InputHTMLAttributes } from 'react';

interface InputCountProps extends InputHTMLAttributes<HTMLInputElement> {
  onAddProduct?: () => void;
  onRemoveProduct?: () => void;
}

export function InputCount({
  onAddProduct,
  onRemoveProduct,
  ...rest
}: InputCountProps) {
  return (
    <InputCountContainer>
      <button type='button' onClick={onRemoveProduct}>
        <Minus size={14} weight='bold' />
      </button>

      <input type='number' {...rest} />

      <button type='button' onClick={onAddProduct}>
        <Plus size={14} weight='bold' />
      </button>
    </InputCountContainer>
  );
}
