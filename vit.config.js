export default defineConfig({
  base: "./", // Assets का सही path लेने के लिए
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
