import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: './',
  test: {
    coverage: {
      provider: 'v8', // Ou 'c8' selon votre préférence
      reporter: ['text', 'lcov'], // lcov pour le badge
      reportsDirectory: './coverage', // dossier de sortie
    },
  },
});
