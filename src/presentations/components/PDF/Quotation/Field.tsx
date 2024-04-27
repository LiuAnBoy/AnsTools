import { Text, View } from '@react-pdf/renderer';

const Field = ({
  field,
  value,
  mb = true,
}: {
  field: string;
  value: string;
  mb?: boolean;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        marginBottom: mb ? 16 : 0,
      }}
    >
      <Text
        style={{
          borderBottom: '1px solid #c1c0c0',
          position: 'relative',
          width: '33%',
          fontSize: 14,
          lineHeight: 1.6,
          color: '#423f3e',
        }}
      >
        {field}
      </Text>
      <View>
        <Text
          style={{
            marginLeft: -2,
            marginRight: -2,
            fontWeight: 500,
            color: '#c1c0c0',
            fontSize: 12.4,
            top: 9.5,
          }}
        >
          ⊥
        </Text>
      </View>
      <Text
        style={{
          borderBottom: '1px solid #c1c0c0',
          width: '66%',
          textAlign: 'center',
          fontSize: 14,
          lineHeight: 1.6,
          color: '#423f3e',
        }}
      >
        {value || ''}
      </Text>
    </View>
  );
};

export default Field;
