import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';

export default function Button({ title, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.gold,
    borderBottomWidth: 4,
    borderBottomColor: colors.red,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 28,
    alignItems: 'center',
  },
  pressed: { backgroundColor: colors.red, borderBottomColor: colors.gold },
  text: { color: colors.black, fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 },
});
