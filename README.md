# Tech Stack
- ReactJS
- Vite
- TailwindCSS
- supabase

# Folder Tree

```
└── src/
    ├── index.css
    ├── main.tsx
    ├── pages/
    │   └── Identity.tsx
    ├── layouts/
    │   └── nav.tsx
    ├── data/
    │   └── project.json
    ├── components/
    │   ├── CoreSkill.tsx
    │   ├── Experience.tsx
    │   └── Projects.tsx
    └── assets/
        ├── hero.png
        ├── ian-dooley-d1UPkiFd04A-unsplash.png
        ├── jurica-koletic-7YVZYZeITc8-unsplash (4).png
        ├── pixelimage.png
        └── _CV-ZAKY (Updated  2).pdf
```

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```


# note

1. menggunakan supabase hanya untuk resume saja karena itu yang paling sering berubah pada Identity.tsx
   a.Supabase(zesciati's Project) -> Table editor -> resumes(table) -> kolom resume terdapat url resume(Storage(sidebar) -> my-resumes -> titik 3  -> get url)