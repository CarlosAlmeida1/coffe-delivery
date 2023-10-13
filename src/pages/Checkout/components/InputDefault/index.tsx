import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form'; // Importe o useFormContext
import { InputContainer } from './styles';

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  optionLabel?: boolean;
  gridArea?: string;
  registerName?: string | undefined;
}

export function InputDefault({
  optionLabel = false,
  gridArea = '',
  registerName = undefined,
  ...rest
}: InputDefaultProps) {
  const { register } = useFormContext();

  return (
    <InputContainer id={gridArea}>
      {registerName ? (
        <input {...register(registerName)} {...rest} />
      ) : (
        <input {...rest} />
      )}
      {optionLabel && (
        <span>
          <i>Opcional</i>
        </span>
      )}
    </InputContainer>
  );
}
