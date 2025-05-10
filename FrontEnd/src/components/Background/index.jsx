import { Background } from "./styles";

function defaultBackground({ children, ...props }) {
  return <Background {...props}>{children}</Background>;
}

export default defaultBackground;
