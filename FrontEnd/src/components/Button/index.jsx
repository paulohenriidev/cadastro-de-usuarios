import { Button } from "./styles";
import PropTypes from "prop-types";

function defaultButton({ children,theme, ...props }) {
  return <Button {...props}theme={theme}>{children}</Button>;
}

defaultButton.prototype = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string
}
export default defaultButton;
