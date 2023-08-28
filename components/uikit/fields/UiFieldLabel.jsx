/**
 * @param {{
 *     label: string,               // The label text.
 *     required: boolean,           // Indicates if the field is required.
 *     }} props
 * * @returns {JSX.Element|null} The text field component.
 */

import { clsx } from "clsx";

export function UiFieldLabel({ label, required }) {
  return (
    <label
      htmlFor="example2"
      className={clsx(
        required && "after:text-orange-600 after:content-['*']",
        "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5 ",
      )}
    >
      {label}
    </label>
  );
}
