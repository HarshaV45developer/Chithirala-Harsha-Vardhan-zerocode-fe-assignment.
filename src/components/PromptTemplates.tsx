
import React from 'react';
import { Button } from '@/components/ui/button';
import { useChat } from '@/contexts/ChatContext';

const promptTemplates = [
  { id: '1', title: 'Tell me a joke', prompt: 'Tell me a funny joke to brighten my day!' },
  { id: '2', title: 'Random fact', prompt: 'Share an interesting random fact with me.' },
  { id: '3', title: 'Creative story', prompt: 'Write a short creative story about a magical adventure.' },
  { id: '4', title: 'Life advice', prompt: 'Give me some inspirational life advice.' },
  { id: '5', title: 'Explain AI', prompt: 'Explain artificial intelligence in simple terms.' },
  { id: '6', title: 'Recipe idea', prompt: 'Suggest a quick and easy recipe I can make today.' },
];

const PromptTemplates: React.FC = () => {
  const { sendMessage, state } = useChat();

  const handleTemplateClick = (prompt: string) => {
    if (!state.isLoading) {
      sendMessage(prompt);
    }
  };

  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        Quick Prompts
      </h3>
      <div className="flex flex-wrap gap-2">
        {promptTemplates.map((template) => (
          <Button
            key={template.id}
            variant="outline"
            size="sm"
            onClick={() => handleTemplateClick(template.prompt)}
            disabled={state.isLoading}
            className="text-xs"
          >
            {template.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PromptTemplates;
