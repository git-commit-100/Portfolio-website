import { useState } from "react";

function useInput(validateValue) {
  //validateValue is a validating function which returns true for valid values
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const isInputValid = validateValue(inputValue);

  const doesInputHaveError = !isInputValid && isInputTouched;

  // setting input values
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  // setting input blur to ensure input has been touched
  function handleInputBlur() {
    setIsInputTouched(true);
  }

  //resetting input
  function resetInput() {
    setInputValue("");
    setIsInputTouched(false);
  }

  return {
    value: inputValue,
    isValid: isInputValid,
    hasError: doesInputHaveError,
    handleInputChange,
    handleInputBlur,
    resetInput,
  };
}

export default useInput;
