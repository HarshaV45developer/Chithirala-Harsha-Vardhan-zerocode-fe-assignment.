
import React from 'react';
import { Message } from '@/types';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  const timestamp = message.timestamp.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className={cn(
      "flex w-full mb-4 animate-fade-in",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[70%] rounded-2xl px-4 py-3 shadow-sm",
        isUser 
          ? "bg-blue-500 text-white rounded-br-md" 
          : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-bl-md"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {message.content}
        </p>
        <p className={cn(
          "text-xs mt-2 opacity-70",
          isUser ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
        )}>
          {timestamp}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
