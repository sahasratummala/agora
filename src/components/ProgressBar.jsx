export default function ProgressBar({ progress }) {
  return (
    <div className="progress">
      <span className="progress-bar" style={{ width: `${progress * 100}%` }}></span>
    </div>
  );
}
