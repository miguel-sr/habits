interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    /**
     * Seria possível usar também o componente Progress do Radix
     */
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  );
}
