import { FileTextOutlined } from '@ant-design/icons';
import { Space } from 'antd';

import FunctionCard from '@/presentations/components/FunctionCard';

export default function Home() {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          marginBottom: 32,
          letterSpacing: 2,
          fontSize: 48,
        }}
      >
        工具
      </h1>
      <Space style={{ width: '100%', justifyContent: 'space-around' }}>
        <FunctionCard
          title="報價單產生器"
          href="/function/quotation-generator"
          icon={<FileTextOutlined style={{ fontSize: 46 }} />}
        />
      </Space>
    </div>
  );
}
