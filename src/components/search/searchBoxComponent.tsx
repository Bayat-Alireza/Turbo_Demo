import InputBase from "@material-ui/core/InputBase";
import React, { useState } from "react";

const WrappedTextField = ({ value, onChange, ...props }: { value: any, onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void }) => (
  <InputBase name="author" value={value} onChange={onChange} />
);

export function CustomTextField() {
  const [data, setData] = useState<string>("");
  const handleChange = (e: any) => { setData(e.target.value); }
  return (
    <div>
      <WrappedTextField
        // name="author"
        // label="author"
        value={data}
        onChange={handleChange}
      />
    </div>
  );
}