import React from 'react';
import styles from './InteractiveChart.module.css';

interface InteractiveChartProps {
  data?: number[];
  title?: string;
  className?: string;
}

const InteractiveChart: React.FC<InteractiveChartProps> = ({ 
  data = [10, 20, 30, 40, 50], 
  title = "Sample Chart",
  className 
}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.chart}>
        {data.map((value, index) => (
          <div 
            key={index}
            className={styles.bar}
            style={{ height: `${value * 2}px` }}
            title={`Value: ${value}`}
          >
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
      <p className={styles.description}>
        This is an example interactive chart component that you can use in your blog posts.
      </p>
    </div>
  );
};

export default InteractiveChart; 