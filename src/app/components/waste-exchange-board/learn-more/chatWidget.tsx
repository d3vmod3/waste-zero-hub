"use client";

import { useState } from "react";

type Message = {
  from: "user" | "bot";
  text: string;
};

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const professionalReplies: string[] = [
    "Thank you for reaching out. We'll get back to you shortly with more details.",
    "We appreciate your inquiry. Our team will respond as soon as possible.",
    "Your message has been received. Expect a reply from us soon.",
  ];

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      const reply =
        professionalReplies[
          Math.floor(Math.random() * professionalReplies.length)
        ];
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white h-96 shadow-lg rounded-lg overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-primary text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
        <span className="font-semibold">Chat with Juan Dela Cruz</span>
        <button onClick={onClose} className="text-white text-lg">
          x
        </button>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-3 space-y-2"
        style={{ maxHeight: "300px" }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg text-sm max-w-[80%] ${
              msg.from === "user"
                ? "bg-primary text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-2 border-t flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 border rounded px-2 py-1 text-sm"
        />
        <button
          onClick={sendMessage}
          className="bg-primary text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
