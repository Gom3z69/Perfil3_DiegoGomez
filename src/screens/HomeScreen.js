import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import InfoRow from '../components/InfoRow';
import { student } from '../data/student';
import { colors } from '../theme/colors';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Image source={require('../../assets/splash-icon.png')} style={styles.logo} />
      <Text style={styles.title}>Perfil 3</Text>
      <Text style={styles.subtitle}>Dragon Ball Super · Planetas</Text>
      <View style={styles.panel}>
        <InfoRow label="Nombre" value={student.name} />
        <InfoRow label="Carnet" value={student.carnet} />
        <InfoRow label="Sección" value={student.section} />
        <InfoRow label="Grupo" value={student.group} />
      </View>
      <Button title="Ver planetas" onPress={() => navigation.navigate('Planets')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.black },
  content: { flexGrow: 1, justifyContent: 'center', padding: 24, paddingBottom: 48 },
  logo: { width: 170, height: 170, alignSelf: 'center' },
  title: { color: colors.gold, fontSize: 34, fontWeight: 'bold', textAlign: 'center', marginTop: 8 },
  subtitle: { color: colors.muted, fontSize: 14, textAlign: 'center', marginBottom: 24 },
  panel: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderTopWidth: 4,
    borderTopColor: colors.red,
    paddingHorizontal: 18,
    paddingBottom: 6,
    marginBottom: 28,
  },
});
