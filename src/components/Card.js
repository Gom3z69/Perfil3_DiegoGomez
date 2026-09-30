import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function Card({ title, image, description, badge, alert }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          {!!badge && <Text style={[styles.badge, alert && styles.alert]}>{badge}</Text>}
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 5,
    borderLeftColor: colors.red,
    overflow: 'hidden',
    marginBottom: 16,
  },
  imageBox: { backgroundColor: colors.black, padding: 12 },
  image: { width: '100%', height: 180 },
  body: { padding: 16, gap: 8 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  title: { flex: 1, color: colors.gold, fontSize: 20, fontWeight: 'bold' },
  badge: {
    backgroundColor: colors.gold,
    color: colors.black,
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  alert: { backgroundColor: colors.red, color: colors.text },
  description: { color: colors.text, fontSize: 14, lineHeight: 21 },
});
