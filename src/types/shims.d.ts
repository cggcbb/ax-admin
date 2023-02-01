// import type { MessageRenderMessage } from 'naive-ui'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare interface Window {
//   $message: MessageRenderMessage
// }
