
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Message, ChatState } from '@/types';

interface ChatContextType {
  state: ChatState;
  sendMessage: (content: string) => Promise<void>;
  addToHistory: (message: string) => void;
  navigateHistory: (direction: 'up' | 'down') => string;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

type ChatAction = 
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'ADD_TO_HISTORY'; payload: string }
  | { type: 'SET_HISTORY_INDEX'; payload: number }
  | { type: 'CLEAR_CHAT' };

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'ADD_TO_HISTORY':
      return {
        ...state,
        messageHistory: [action.payload, ...state.messageHistory.filter(h => h !== action.payload)].slice(0, 50),
        historyIndex: -1,
      };
    case 'SET_HISTORY_INDEX':
      return {
        ...state,
        historyIndex: action.payload,
      };
    case 'CLEAR_CHAT':
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};

const initialState: ChatState = {
  messages: [],
  isLoading: false,
  messageHistory: [],
  historyIndex: -1,
};

const mockBotResponses = [
  "That's an interesting question! Let me think about that.",
  "I understand what you're asking. Here's my perspective on that topic.",
  "Great point! I'd like to share some thoughts on this.",
  "That's a fascinating topic. Let me provide you with some insights.",
  "I appreciate your question. Here's what I think about that.",
  "Excellent question! I have some ideas to share with you.",
  "That's worth exploring. Let me break this down for you.",
  "I see what you're getting at. Here's my take on this matter.",
];

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const sendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    dispatch({ type: 'ADD_MESSAGE', payload: userMessage });
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      // Mock API delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

      // Generate mock bot response
      const botResponse = mockBotResponses[Math.floor(Math.random() * mockBotResponses.length)];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      dispatch({ type: 'ADD_MESSAGE', payload: botMessage });
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
      };
      dispatch({ type: 'ADD_MESSAGE', payload: errorMessage });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const addToHistory = (message: string) => {
    if (message.trim()) {
      dispatch({ type: 'ADD_TO_HISTORY', payload: message });
    }
  };

  const navigateHistory = (direction: 'up' | 'down'): string => {
    const { messageHistory, historyIndex } = state;
    
    if (messageHistory.length === 0) return '';

    let newIndex: number;
    
    if (direction === 'up') {
      newIndex = historyIndex < messageHistory.length - 1 ? historyIndex + 1 : historyIndex;
    } else {
      newIndex = historyIndex > -1 ? historyIndex - 1 : -1;
    }

    dispatch({ type: 'SET_HISTORY_INDEX', payload: newIndex });
    
    return newIndex >= 0 ? messageHistory[newIndex] : '';
  };

  const clearChat = () => {
    dispatch({ type: 'CLEAR_CHAT' });
  };

  return (
    <ChatContext.Provider value={{ state, sendMessage, addToHistory, navigateHistory, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
