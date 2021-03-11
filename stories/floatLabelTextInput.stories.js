import { action } from "@storybook/addon-actions";
import { FloatLabelTextInput } from "../src/index";

export default {
  title: "FloatLabelTextInput",
  component: FloatLabelTextInput,
};

export const Text = () => ({
  Component: FloatLabelTextInput,
  props: { value: "", placeholder: "Placeholder here..." },
});

export const PersistentLabel = () => ({
  Component: FloatLabelTextInput,
  props: {
    value: "",
    placeholder: "Placeholder here...",
    persistentLabel: "Label here",
  },
});

export const SupportLabel = () => ({
  Component: FloatLabelTextInput,
  props: {
    value: "",
    placeholder: "Placeholder here...",
    supportLabel: "Some Support Text here",
  },
});

export const ErrorLabel = () => ({
  Component: FloatLabelTextInput,
  props: {
    value: "",
    placeholder: "Placeholder here...",
    supportLabel: "Some Support Text here",
    errorLabel: "Hey you got some error",
    isError: true,
  },
});
