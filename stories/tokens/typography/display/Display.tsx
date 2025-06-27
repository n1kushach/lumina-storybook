export interface DisplayProps {
  color?: string;
  text?: string
 
}

export const Display = ({color, text}: DisplayProps) => {
  return <h1 className="display" style={{color: color}}>{text}</h1>
}