# Wizytówka Marty — portfolio UGC

Statyczna strona bez frameworka: HTML, CSS i JavaScript. Kod źródłowy znajduje się w `src/`, a pliki do publikacji powstają w `dist/` po uruchomieniu `pnpm build`.

## Szybka edycja

- **Teksty i sekcje:** `src/index.html` — zmieniaj nagłówki, opisy, usługi i kolejność kart.
- **Zdjęcia:** dodawaj własne pliki do `assets/`, np. `assets/merino-film-cover.webp`, a ich ścieżki podmieniaj w `src/index.html`.
- **Opisy dostępności:** przy podmianie zdjęcia zmień też tekst `alt`, żeby opisywał nowy obraz.
- **Kontakt:** podmień odnośnik przycisku „Napisz do mnie” na `mailto:twoj-adres@example.com` i usuń notatkę `[Tu dodamy e-mail…]`.
- **Kategorie:** każda karta ma `data-category`; przy dodaniu kategorii dodaj odpowiadający jej filtr.
- **Wygląd i animacje:** `src/styles/styles.css`; zachowaj obsługę `prefers-reduced-motion`.
- **Interakcje:** `src/script.js` zawiera mobilne menu, filtry i delikatne pojawianie się sekcji.

## Przed publikacją

1. Podmień stockowe zdjęcia i dostosuj teksty projektów do rzeczywistych prac.
2. Zostaw rozróżnienie między płatną/barterową współpracą a autorskim konceptem.
3. Wstaw właściwy e-mail, Instagram i ewentualnie linki do filmów.
4. Sprawdź stronę na telefonie oraz z klawiaturą; obrazy zewnętrzne wymagają połączenia z internetem.

Zdjęcia stockowe są wyłącznie tymczasowymi ilustracjami. Przed publicznym uruchomieniem najlepiej użyć własnych, zoptymalizowanych plików WebP/AVIF. Filmy można osadzić z hostingu wideo lub pokazać jako miniatury prowadzące do filmu.

## CI/CD i publikacja

- Workflow `.github/workflows/ci-cd.yml` uruchamia się przy pull requestach do `main` oraz przy pushu na `main`.
- Kontrole: Prettier, ESLint, Vitest (na razie bez testów), a następnie zbudowanie katalogu `dist`.
- Po poprawnym pushu na `main` katalog `dist` jest publikowany na GitHub Pages.
- Przy pierwszej publikacji repozytorium musi mieć w **Settings → Pages → Build and deployment** wybrane źródło **GitHub Actions**. Wymagane uprawnienia workflow są ograniczone do odczytu repozytorium i publikacji Pages.
- Aktualizuj zależności przez pnpm i zatwierdzaj razem pliki `package.json` oraz `pnpm-lock.yaml`; CI instaluje je w trybie `--frozen-lockfile`.
