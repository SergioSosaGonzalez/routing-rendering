'use client';

import { useRouter } from "next/navigation";

export default function ModalBack() {
    const router = useRouter();
    return <div className="modal-backdrop" onClick={() => router.back()} />;
}