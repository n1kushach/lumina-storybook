export interface BodyProps {
  color?: string;
  text?: string
  type: "Body-Compact-01"|
      "Body-Compact-02"|
      "Body-01"|
      "Body-02"
}

export const Body = ({color, text, type}: BodyProps) => {

  const STYLES: Record<BodyProps["type"], string> = {
    "Body-Compact-01": "body_compact-01",
    "Body-Compact-02": "body_compact-02",
    "Body-01": "body_01",
    "Body-02": "body_02",
  };

  return <h1 className={STYLES[type]} style={{color: color}}>{text}</h1>
}