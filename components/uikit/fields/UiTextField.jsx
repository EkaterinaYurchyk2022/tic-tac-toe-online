/**
 * @param {{
 *     label: string,               // The label text.
 *     required: boolean,           // Indicates if the field is required.
 *     helperText: string,          // The helper text.
 *     errorText: string,           // The error text.
 *     className: string,           // The additional CSS classes for the component.
 * } & import('react').HTMLAttributes<HTMLInputElement> } props
 * * @returns {JSX.Element|null} The text field component.
 */

import { UiFieldLabel } from "./UiFieldLabel";
import { UiFieldMessage } from "./UiFieldMessage";
import { UiFieldInput } from "./UiFieldInput";

export function UiTextField({
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      <UiFieldLabel label={label} required={required} />
      <UiFieldInput required={required} errorText={errorText} {...inputProps} />
      <UiFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}
