import { action } from "@storybook/addon-actions";
import FloatLabelTextInput from "../src/index";

export default {
  title: "FloatLabelTextInput",
  component: FloatLabelTextInput,
};

export const Text = () => ({
  Component: FloatLabelTextInput,
  props: { value: "", placeholder: "Hello There..." },
});

export const Emoji = () => ({
  Component: FloatLabelTextInput,
  props: { value: "", placeholder: "👍 💯😀 😎" },
});
