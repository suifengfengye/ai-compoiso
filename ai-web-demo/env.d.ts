declare module 'click-outside-vue3' {
  const vClickOutside: any;
  export default vClickOutside;
}

declare module 'vue3-markdown-it' {
  const Markdown: any;
  export default Markdown;
}

interface ImportMetaEnv {
  readonly BASE_URL: string;
  // 你可以在这里添加其他环境变量
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
