import { AlignBottom } from "../src/index";

export default {
  title: "AlignBottom",
  component: AlignBottom,
};

export const Default = () => ({
  Component: AlignBottom,
});

export const IsFullHeight = () => ({
  Component: AlignBottom,
  props: { isFullHeight: true },
});

export const IsRemixing = () => ({
  Component: AlignBottom,
  props: { isRemixing: true },
});
