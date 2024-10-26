import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

export type MDInputFieldType = {
  className?: string;
  label1?: string;
  messageBoxPlaceholder?: string;

  /** Variant props */
  fieldType?: "Generic";
  label?: boolean;
  showPassword?: boolean;
  state?: "Default";
  textDescription?: boolean;
};

const MDInputField: FunctionComponent<MDInputFieldType> = ({
  className = "",
  fieldType = "Generic",
  label = true,
  showPassword = false,
  state = "Default",
  textDescription = false,
  label1,
  messageBoxPlaceholder,
}) => {
  return (
    <div
      className={`w-[400px] flex flex-col items-start justify-start gap-2 text-left text-xs text-mdshade-40 font-body-regular ${className}`}
      data-fieldType={fieldType}
      data-label={label}
      data-showPassword={showPassword}
      data-state={state}
      data-textDescription={textDescription}
    >
      <div className="relative tracking-[-0.01em] leading-[18px] font-medium">
        {label1}
      </div>
      <TextField
        className="[border:none] bg-[transparent] self-stretch h-[45px] font-body-regular text-base text-silver"
        placeholder={messageBoxPlaceholder}
        variant="outlined"
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "45px",
            backgroundColor: "#f8f9fc",
          },
          "& .MuiInputBase-input": { color: "#c3cad5" },
        }}
      />
    </div>
  );
};

export default MDInputField;
