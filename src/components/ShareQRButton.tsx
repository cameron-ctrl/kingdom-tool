"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Share, Copy, QrCode } from "lucide-react";

export default function ShareQRButton({
  label = "Share App",
  size = "default",
}: {
  label?: string;
  size?: "default" | "small";
}) {
  const [open, setOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  const url = "https://thekingdomstory.app";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "The Kingdom Story",
        text: "Check this out:",
        url,
      });
    } else {
      handleCopy();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`rounded-md border border-kingdomBlue font-b hover:bg-kingdomBlue hover:text-white active:scale-[0.98] transition-all
          ${size === "small" ? "px-3 py-1.5 text-[10pt]" : "px-4 py-2"}
        `}
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 animate-fadeIn">
          <div className="w-full max-w-sm rounded-lg bg-white p-5 text-center shadow-xl animate-scaleIn">

            {!showQR ? (
              <>
                <h2 className="font-h text-lg text-kingdomBlue">
                  Share this app
                </h2>

                <div className="mt-4 space-y-3">

                  <button
                    onClick={handleShare}
                    className="w-full flex items-center justify-center gap-1.5 rounded-md bg-gold px-4 py-3 font-b text-ink hover:bg-lightBlue"
                  >
                    <Share size={18} strokeWidth={2.25} />
                    Share
                  </button>

                  <button
                    onClick={handleCopy}
                    className="w-full flex items-center justify-center gap-1.5 rounded-md border border-kingdomBlue px-4 py-3 font-b hover:bg-kingdomBlue hover:text-white"
                  >
                    <Copy size={18} />
                    {copied ? "Copied!" : "Copy Link"}
                  </button>

                  <button
                    onClick={() => setShowQR(true)}
                    className="w-full flex items-center justify-center gap-1.5 rounded-md border border-kingdomBlue px-4 py-3 font-b hover:bg-kingdomBlue hover:text-white"
                  >
                    <QrCode size={18} />
                    Show QR Code
                  </button>

                </div>
              </>
            ) : (
              <>
                <h2 className="font-h text-lg text-kingdomBlue">
                  Scan to open
                </h2>

                <div className="mt-4 flex justify-center">
                  <QRCodeCanvas value={url} size={200} />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setShowQR(false)}
                    className="text-sm text-ink/60 underline"
                  >
                    ← Back
                  </button>

                  <button
                    onClick={() => {
                      setOpen(false);
                      setShowQR(false);
                    }}
                    className="text-sm text-ink/60 underline"
                  >
                    Close
                  </button>
                </div>
              </>
            )}

            {!showQR && (
              <button
                onClick={() => setOpen(false)}
                className="mt-4 text-sm text-ink/60 underline"
              >
                Close
              </button>
            )}

          </div>
        </div>
      )}
    </>
  );
}