import { FlatList, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import ErrorView from '../components/ErrorView';
import Loader from '../components/Loader';
import usePlanets from '../hooks/usePlanets';
import { colors } from '../theme/colors';

export default function PlanetsScreen() {
  const { planets, destroyed, loading, error, reload } = usePlanets();

  if (loading) return <Loader text="Cargando planetas..." />;
  if (error) return <ErrorView message={error} onRetry={reload} />;

  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={styles.content}
      data={planets}
      keyExtractor={(item) => String(item.id)}
      ListHeaderComponent={
        <Text style={styles.header}>
          {planets.length} planetas · <Text style={styles.red}>{destroyed} destruidos</Text>
        </Text>
      }
      renderItem={({ item }) => (
        <Card
          title={item.name}
          image={item.image}
          description={item.description}
          badge={item.status}
          alert={item.isDestroyed}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.black },
  content: { padding: 16, paddingBottom: 48 },
  header: { color: colors.gold, fontSize: 15, fontWeight: 'bold', marginBottom: 14 },
  red: { color: colors.red },
});
