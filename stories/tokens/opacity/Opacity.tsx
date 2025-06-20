
export interface OpacityProps {
 backgroundColor?: string;
 opacity: 'hover' | 'focus' | 'press' | 'active' | 'none';
}

/** Primary UI component for user interaction */
export const Opacity = ({
  backgroundColor,
  opacity,
}: OpacityProps) => {
  const OPACITY = {
    none: "opacity-100",
    hover: "opacity-hover",
    focus: "opacity-focus",
    press: "opacity-press",
    active: "opacity-active",
  };
  return (
    <div style={{backgroundColor: backgroundColor}}  className={`h-[500px] w-[500px] ${OPACITY[opacity]} bg-black rounded-[6px]`}></div>
  );
};
