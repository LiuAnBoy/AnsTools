import { LoadingOutlined } from '@ant-design/icons';
import { FC } from 'react';

const Loading: FC<LoadingProps> = ({ size = 'middle' }) => {
  const sizeMap = {
    small: 24,
    middle: 48,
    large: 64,
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoadingOutlined style={{ fontSize: sizeMap[size] }} />
    </div>
  );
};

export default Loading;

interface LoadingProps {
  size?: 'small' | 'middle' | 'large';
}
