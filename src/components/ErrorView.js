import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import { colors } from '../theme/colors';

export default function ErrorView({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Algo salió mal</Text>
      <Text style={styles.message}>{message}</Text>
      <Button title="Reintentar" onPress={onRetry} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.black, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 12 },
  title: { color: colors.red, fontSize: 22, fontWeight: 'bold' },
  message: { color: colors.muted, fontSize: 14, marginBottom: 8 },
});
