
export interface OpacityProps {
 backgroundColor?: string;
 shadow: 'none' | 'extraSmall' | 'small' | 'medium' | 'large'| 'extraLarge'| 'extraLarge2'| 'innerShadow';
}



export const Shadow = ({
  backgroundColor,
  shadow,
}: OpacityProps) => {
  const SHADOW = {
    none: "shadow-100",
    extraSmall: "shadow-extraSmall",
    small: "shadow-small",
    medium: "shadow-medium",
    large: "shadow-large",
    extraLarge: "shadow-extraLarge",
    extraLarge2: "shadow-extraLarge2",
    innerShadow: "shadow-innerShadow",
  };
  return (
    <div style={{backgroundColor: backgroundColor}}  className={`h-[500px] w-[500px] ${SHADOW[shadow]} flex items-center justify-center text-[20px]  rounded-[6px]`}>
    </div>
  );
};
