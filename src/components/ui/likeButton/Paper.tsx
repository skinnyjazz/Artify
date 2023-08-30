import { ReactNode, FC, HTMLProps } from "react";

type Props = {
  children: ReactNode;
} & HTMLProps<HTMLDivElement>;

const Paper: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <article className={`paper ${className}`} {...rest}>
      {children}
    </article>
  );
};

export default Paper;
