interface ArtifactPlaceholderProps {
  label: string;
  aspectRatio?: string;
}

const ArtifactPlaceholder = ({ label, aspectRatio = "aspect-video" }: ArtifactPlaceholderProps) => (
  <div className={`${aspectRatio} bg-muted border border-border flex items-center justify-center`}>
    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
      [ {label} ]
    </span>
  </div>
);

export default ArtifactPlaceholder;
