/* UiLiquidGlass.tsx */



import type { ReactNode } from 'react';

import styles from './UiLiquidGlass.module.css';
import UiLiquidGlassFilter from './UiLiquidGlassFilter';

type UiLiquidGlassProps = {
  children: ReactNode;
  className?: string;
};

export default function UiLiquidGlass({
  children, className
}: UiLiquidGlassProps) {
  return (
    <>
      <UiLiquidGlassFilter />

      <div className={`${styles.liq} ${className}`}>
        {children}
      </div>
    </>
  );
}

