import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-light-green-1 h-0.5 rounded">
      <div
        className="h-full bg-light-blue rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;