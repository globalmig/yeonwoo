export const TOAST_EVENT = "app:toast";

export interface ToastDetail {
  title: string;
  description?: string;
}

export function toast(detail: ToastDetail) {
  window.dispatchEvent(new CustomEvent<ToastDetail>(TOAST_EVENT, { detail }));
}
