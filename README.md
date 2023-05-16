## Первая установка
В проекте используется yarn, вы должны использовать только его вместе с этим проектом и не перемешивать использование с npm или другими.
```bash
yarn install
```

### Старт
```bash
yarn dev
```

### Сборка
```bash
yarn build
```

## Опциональные пакеты
Пакеты такие как `@lmpx/styled` это собственные пакеты, содержащие общие и переходящие из проекта в проект реализации. Версии таких пакетов зафиксированы, чтобы не наоушить в будущем функцинальность. Найти реализацию таких пакетов можно [тут](https://github.com/LIMPIX31/design/tree/master/feature-sliced/ui/styled)

## Полезные инструменты
Следующие инструменты не являются частью yarn и реализованы как плагины для yarn [тут](https://github.com/LIMPIX31/tools)

### Typecheck
Проверка типов Typescript
```bash
yarn typecheck
```

### Lint
Подсказки и рекомендации по качеству кода
```bash
yarn lint
```



#### Настройка eslint в idea(webstorm)
![image](https://github.com/LIMPIX31/starter/assets/81296950/48a998e8-bae2-4143-8d7c-ec418debd4da)
