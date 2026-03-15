import { useReveal } from '../hooks/useReveal';

export const Reveal = ({ as: Tag = 'div', className = '', children, delay = 0, threshold = 0.18, style, ...props }) => {
  const { ref, isVisible } = useReveal({ threshold });

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
};
