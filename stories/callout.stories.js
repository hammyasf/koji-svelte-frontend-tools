import { Callout } from "../src/index";

export default {
  title: "Callout",
  component: Callout,
};

export const Default = () => ({
  Component: Callout,
  props: { isVisible: true },
});

export const IsPointingLeft = () => ({
  Component: Callout,
  props: { isVisible: true, isPointingLeft: true },
});
