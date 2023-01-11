import { FC, ReactElement } from 'react';

type AppLayoutsProps = any
const AppLayouts: FC<AppLayoutsProps> = ({ children }): ReactElement => {
  return <div>
    <div>header</div>
    <main>{children}</main>
    <div>footer</div>
  </div>;
};

export default AppLayouts;