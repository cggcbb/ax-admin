declare interface Window {
  $message: any
}

interface IResponse  {
  code: string | number,
  data: any,
  msg?: string
}
