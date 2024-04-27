import { Card } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import styles from '../../styles/components/FunctionCard.module.scss';

const FunctionCard: FC<FunctionCardProps> = ({ icon, title, href }) => {
  return (
    <Link href={href}>
      <Card
        hoverable
        cover={<div className={styles.function_card_cover}>{icon}</div>}
        style={{ width: 240 }}
      >
        <h2 className={styles.function_card_title}>{title}</h2>
      </Card>
    </Link>
  );
};

export default FunctionCard;

interface FunctionCardProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}
