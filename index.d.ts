declare global {
  interface Window {
    Telegram: Telegram
    gtag: (...args: any[]) => void;
  }
}