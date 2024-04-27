import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Logo: FC = () => {
  return (
    <Link
      href="/"
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <Image
        style={{ width: '40px', cursor: 'pointer', marginRight: 12 }}
        alt="favicon"
        width={40}
        height={40}
        src="/logo.png"
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontWeight: 400,
            letterSpacing: 1.2,
            fontSize: 16,
            lineHeight: 1.1,
          }}
        >
          {`An's`}
        </span>
        <span
          style={{
            fontWeight: 400,
            letterSpacing: 1.2,
            fontSize: 16,
            lineHeight: 1.1,
          }}
        >
          Tools
        </span>
      </div>
    </Link>
  );
};

export default Logo;
