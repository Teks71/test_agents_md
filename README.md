# Electron Boilerplate

Минимальный стартовый шаблон для настольного приложения на Electron.

## Структура
- `src/main.js` — основной процесс: окно, загрузка renderer, IPC `ping`.
- `src/preload.js` — мост между renderer и main через `contextBridge`.
- `src/renderer/` — статическая страница `index.html` и логика `renderer.js`.
- `scripts/` — заглушки для сборки и линтинга, замените реальными пайплайнами.
- `package.json` — скрипты и dev-зависимости.

## Требования
- Node.js 18+ и установленный `npm`/`pnpm`/`yarn`.

## Запуск
- Установка зависимостей: `npm install`.
- Режим разработки (откроет DevTools): `npm run dev`.
- Запуск без доп. логов: `npm start`.
- Заглушки (замените в будущем): `npm run build`, `npm run lint`.

## Дальнейшие шаги
- Подключите сборщик (electron-builder, vite/webpack) вместо заглушек.
- Настройте ESLint/Prettier и обновите `npm run lint`.
- Добавьте тесты для main/preload/renderer (например, Vitest + @testing-library/dom).
