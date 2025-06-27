export interface UtilityProps {
  color?: string;
  text?: string
  type:  "Label-01"|
      "Label-02"|
      "Label-03"|
      "Helper-01"|
      "Helper-02"|
      "Legal-01"|
      "Legal-02"|
      "Metric-01"|
      "Metric-02"|
      "Metric-03"
}

export const Utility = ({color, text, type}: UtilityProps) => {

  const STYLES: Record<UtilityProps["type"], string> = {
    "Label-01": "label-01",
    "Label-02": "label-02",
    "Label-03": "label-01",
    "Helper-01": "helper-01",
    "Helper-02": "helper-02",
    "Legal-01": "legal-01",
    "Legal-02": "legal-02",
    "Metric-01": "metric-01",
    "Metric-02": "metric-02",
    "Metric-03": "metric-03",
  };

  return <h1 className={STYLES[type]} style={{color: color}}>{text}</h1>
}