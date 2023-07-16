export interface InputProps {
  type: "text" | "email";
  value: string;
  onChange: (newValue: string) => void;
}

//This way of type alias does not work with interface
type InputOnChange = (newValue: string) => void;
type InputValue = string;
type InputType = "text" | "email";

export type InputPropsType = {
  type: InputType;
  value: InputValue;
  onChange: InputOnChange;
};

// export type InputPropsType = {
//   type: string;
//   value: string;
//   onChange: (newValue: string) => void;
// };
