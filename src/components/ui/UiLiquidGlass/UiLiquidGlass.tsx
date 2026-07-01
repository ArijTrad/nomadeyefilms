/* UiLiquidGlass.tsx */



import type { ReactNode } from 'react';

import styles from './UiLiquidGlass.module.css';
import UiLiquidGlassFilter from './UiLiquidGlassFilter';

type UiLiquidGlassProps = {
  children: ReactNode;
};

export default function UiLiquidGlass({
  children,
}: UiLiquidGlassProps) {
  return (
    <>
      <UiLiquidGlassFilter />

      <div className={styles.root}>
        {children}
      </div>
    </>
  );
}