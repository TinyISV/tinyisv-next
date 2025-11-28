interface ContactTextProps {
  text: string;
}

export function ContactText({ text }: ContactTextProps) {
  return (
    <div className="relative inline-block">
      <div 
        className="select-none font-mono text-lg tracking-wide px-4 py-2 bg-muted/30 rounded-md"
        style={{ 
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}
      >
        {text}
      </div>
    </div>
  );
}
