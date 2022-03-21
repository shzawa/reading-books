import { cloneElement, CSSProperties } from "react";

type WithStyleProps = (style: CSSProperties | undefined) => (component: React.ReactElement) => React.ReactNode;
export const withStyle: WithStyleProps = style => component => cloneElement(component, { style})
