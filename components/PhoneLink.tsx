"use client";

import type { MouseEvent, ReactNode } from "react";
import { COMPANY } from "@/lib/legal";
import { toast } from "@/lib/toast";

const TEL_HREF = `tel:${COMPANY.phone.replace(/-/g, "")}`;

// 통화가 가능한 기기(휴대폰)만 tel: 링크를 그대로 사용
function canDial() {
  return /iPhone|iPod|Android.+Mobile|Windows Phone/i.test(navigator.userAgent);
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // http 환경 등 Clipboard API를 못 쓰는 경우
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    el.remove();
    return ok;
  }
}

interface PhoneLinkProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  "aria-label"?: string;
}

export default function PhoneLink({ className, children, onClick, ...rest }: PhoneLinkProps) {
  async function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (canDial()) return;

    e.preventDefault();
    const copied = await copyText(COMPANY.phone);
    toast(
      copied
        ? { title: "전화번호가 복사되었습니다.", description: COMPANY.phone }
        : { title: "전화 상담 문의", description: COMPANY.phone },
    );
  }

  return (
    <a href={TEL_HREF} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}
