# Perfil3_DiegoGomez

Aplicación móvil en React Native con Expo que consume la API de planetas de Dragon Ball.

- **Nombre del estudiante:** Diego Gómez
- **Carnet:** 00000000
- **Video demostrativo:** [Ver video](ENLACE_DEL_VIDEO)
- **Descargar APK:** [Descargar APK](ENLACE_DEL_APK)

## Tecnologías

- Expo SDK 57 / React Native
- React Navigation (native stack)
- API: https://dragonball-api.com/api/planets

## Estructura

```
src/
├── components/   Card, Button, InfoRow, Loader, ErrorView
├── data/         Datos del estudiante
├── hooks/        useFetch, usePlanets
├── navigation/   AppNavigator
├── screens/      HomeScreen, PlanetsScreen
└── theme/        Paleta de colores
```

## Ejecutar

```bash
npm install
npx expo start
```

## Generar APK

```bash
npx eas-cli@latest build -p android --profile preview
```
