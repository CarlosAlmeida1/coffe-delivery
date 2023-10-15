import { Minus, Plus } from 'phosphor-react';
import { InputCountContainer } from './styles';
import { InputHTMLAttributes } from 'react';

interface InputCountProps extends InputHTMLAttributes<HTMLInputElement> {
  onClickAddProduct?: () => void;
  onClickRemoveProduct?: () => void;
}

export function InputCount({
  onClickAddProduct,
  onClickRemoveProduct,
  ...rest
}: InputCountProps) {
  return (
    <InputCountContainer>
      <button type='button' onClick={onClickRemoveProduct}>
        <Minus size={14} weight='bold' />
      </button>

      <input type='number' {...rest} />

      <button type='button' onClick={onClickAddProduct}>
        <Plus size={14} weight='bold' />
      </button>
    </InputCountContainer>
  );
}
