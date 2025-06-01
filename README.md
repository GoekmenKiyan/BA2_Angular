# MealQuest (Angular Version)

Diese Anwendung ist Teil eines Vergleichsprojekts im Rahmen einer Bachelorarbeit, bei dem eine Single Page Application (SPA) mit Angular, React und Vue implementiert wurde. Die Angular-Version verwendet moderne Best Practices und demonstriert eine typische Angular-Architektur zur Umsetzung einer Rezeptsuche mit API-Anbindung.

## 📑 Inhaltsverzeichnis

- [Überblick](#überblick)
- [Features](#features)
- [Technologien](#technologien)
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Projektstruktur](#projektstruktur)
- [Vergleichskontext](#vergleichskontext)
- [Beispielbilder](#beispielbilder)
- [Lizenz](#lizenz)

---

## 🧭 Überblick

**MealQuest** (Angular) ist eine moderne Rezept-Suchanwendung mit Kategorien, Favoritenverwaltung und Detailseiten. Die App verwendet die Spoonacular API zur Rezeptsuche und stellt verschiedene Funktionen für eine angenehme User Experience bereit.

Dieses Repository enthält die **Angular**-Implementierung der Anwendung.

---

## ✨ Features

- 🔍 Rezeptsuche mit Filteroptionen
- 🧾 Rezeptdetails mit Zutaten & Anweisungen
- 🌿 Anzeige vegetarischer Gerichte
- 🏷️ Favoritenverwaltung über lokale Speicherung
- 🖨️ PDF-Export von Rezepten
- 🧭 Routing via Angular Router

---

## ⚙️ Technologien

- [Angular 17](https://angular.io/)
- [Angular CLI](https://angular.io/cli)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Spoonacular API](https://spoonacular.com/food-api)
- [jsPDF](https://github.com/parallax/jsPDF)

---

## 🧪 Installation

```bash
git clone https://github.com/dein-benutzername/mealquest-angular.git
cd mealquest-angular
npm install
ng serve
```

> Lege eine `src/environments/environment.ts` Datei mit deinem API-Key an:

```ts
export const environment = {
  production: false,
  apiKey: 'dein_api_key'
};
```

---

## ▶️ Verwendung

1. Starte den Angular Dev Server: `ng serve`
2. Öffne die App im Browser unter: `http://localhost:4200`
3. Suche, filtere und speichere deine Lieblingsrezepte

---

## 🗂️ Projektstruktur

```text
src/
├── app/
│   ├── components/      → UI-Komponenten (z. B. Header, RecipeCard)
│   ├── pages/           → Hauptseiten (Home, Details, Favorites)
│   ├── services/        → API-Service & Favoritenverwaltung
│   ├── models/          → TypeScript Interfaces
│   └── app-routing.module.ts → Routing-Konfiguration
├── assets/              → Statische Assets
├── environments/        → API-Key Konfiguration
```

---

## 🧪 Vergleichskontext

Diese Angular-App ist eine von drei Implementierungen desselben Projekts (Angular, React, Vue). Ziel war ein methodischer Vergleich bzgl.:
- Architektur
- Entwicklungsaufwand
- Performance
- Framework-Komfort
- Wartbarkeit

---

## 👨‍💻 Lizenz

MIT License

---

## 🙋‍♀️ Fragen?

Bei Rückfragen zur Bachelorarbeit oder zum Projektaufbau gerne Kontakt aufnehmen.
