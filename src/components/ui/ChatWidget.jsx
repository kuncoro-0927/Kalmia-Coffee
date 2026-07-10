import { useState, useRef, useEffect } from "react";
import { VscSend } from "react-icons/vsc";
import gsap from "gsap";
import logoblue from "../../assets/logo-white.svg";
import { useLayoutEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const chatRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hai! Ada yang bisa dibantu soal menu Kalmia Coffee?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, ada gangguan koneksi. Coba lagi ya.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (open && chatRef.current) {
      gsap.fromTo(
        chatRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "back.out(1.7)",
        },
      );
    }
  }, [open]);
  const lastMessageRef = useRef(null);

  useLayoutEffect(() => {
    if (!lastMessageRef.current) return;

    gsap.fromTo(
      lastMessageRef.current,
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      },
    );
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div
          ref={chatRef}
          className="mb-3 pb-3 flex h-[480px] w-80 flex-col overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-[#1746A2] px-4 py-3">
            <div className="flex items-center gap-4">
              <img className="w-6 h-6" src={logoblue} alt="" />
              <div className="flex flex-col">
                <span className="font-semibold text-white">
                  Kalmia Coffee Assistant
                </span>
                <span className=" text-xs text-white">
                  Bantuan seputar Kalmia Coffee
                </span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                ref={i === messages.length - 1 ? lastMessageRef : null}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "user" ? (
                  <div className="w-fit max-w-[90%] rounded-xl bg-[#1746A2] px-3 py-2 text-sm text-white shadow-sm wrap-break-word whitespace-pre-wrap">
                    {m.content}
                  </div>
                ) : (
                  <div className="flex items-start gap-3 max-w-[90%]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1746A2] text-sm font-bold text-white">
                      <img className="w-4 h-4" src={logoblue} alt="" />
                    </div>

                    {/* Bubble */}
                    <div className="rounded-xl bg-[#8eaae1]/10 px-3 py-2 text-sm text-[#363636] shadow-sm backdrop-blur-xs">
                      <p className="mb-1 text-xs font-semibold text-[#1746A2]">
                        Kalmia AI
                      </p>
                      <p>{m.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-3 max-w-[80%]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1746A2] text-sm font-bold text-white">
                  K
                </div>

                <div className="rounded-xl bg-gray-100 px-3 py-2 text-sm text-gray-500">
                  <p className="mb-1 text-xs font-semibold text-[#1746A2]">
                    Kalmia AI
                  </p>
                  <div className="typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 rounded-xl p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tulis pesan..."
              className="flex-1 relative rounded-4xl text-black border-y-2 px-5 py-2 text-sm outline-none border-white/40 shadow-md"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="absolute right-4 cursor-pointer rounded-full mr-4 text-xl text-[#363636] disabled:opacity-50"
            >
              <VscSend />
            </button>
          </div>
          <span className="flex justify-center items-center text-xs text-[#363636]">
            Powered by Kalmia AI
          </span>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex ml-auto h-14 w-14 items-center justify-center rounded-full bg-[#1746A2] text-white shadow-lg hover:scale-105 transition"
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
