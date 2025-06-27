export interface HeadingProps {
  color?: string;
  text?: string
  type:   "Heading 1"|
      "Heading 2"|
      "Heading 3"|
      "Heading 4"|
      "Heading 5"|
      "Heading 6"|
      "Heading 7"
}

export const Heading = ({color, text, type}: HeadingProps) => {

  const STYLES: Record<HeadingProps["type"], string> = {
    "Heading 1": "heading-01",
    "Heading 2": "heading-02",
    "Heading 3": "heading-03",
    "Heading 4": "heading-04",
    "Heading 5": "heading-05",
    "Heading 6": "heading-06",
    "Heading 7": "heading-07",
  };

  return <h1 className={STYLES[type]} style={{color: color}}>{text}</h1>
}