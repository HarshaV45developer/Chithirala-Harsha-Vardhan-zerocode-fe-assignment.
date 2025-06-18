
import React from 'react';
import { Button } from '@/components/ui/button';
import { useChat } from '@/contexts/ChatContext';
import { toast } from '@/hooks/use-toast';

const ChatExport: React.FC = () => {
  const { state } = useChat();

  const exportAsText = () => {
    if (state.messages.length === 0) {
      toast({
        title: 'No messages to export',
        description: 'Start a conversation first before exporting.',
        variant: 'destructive',
      });
      return;
    }

    const chatText = state.messages
      .map(msg => {
        const timestamp = msg.timestamp.toLocaleString();
        const sender = msg.sender === 'user' ? 'You' : 'Bot';
        return `[${timestamp}] ${sender}: ${msg.content}`;
      })
      .join('\n\n');

    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-export-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: 'Chat exported',
      description: 'Your chat has been saved as a text file.',
    });
  };

  const exportAsPDF = () => {
    if (state.messages.length === 0) {
      toast({
        title: 'No messages to export',
        description: 'Start a conversation first before exporting.',
        variant: 'destructive',
      });
      return;
    }

    // Create a simple HTML document for PDF generation
    const chatHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Chat Export</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .message { margin-bottom: 20px; padding: 10px; border-radius: 8px; }
            .user { background-color: #e3f2fd; margin-left: 20%; }
            .bot { background-color: #f5f5f5; margin-right: 20%; }
            .timestamp { font-size: 12px; color: #666; margin-top: 5px; }
            .sender { font-weight: bold; margin-bottom: 5px; }
          </style>
        </head>
        <body>
          <h1>Chat Export - ${new Date().toLocaleDateString()}</h1>
          ${state.messages
            .map(msg => `
              <div class="message ${msg.sender}">
                <div class="sender">${msg.sender === 'user' ? 'You' : 'Bot'}</div>
                <div>${msg.content}</div>
                <div class="timestamp">${msg.timestamp.toLocaleString()}</div>
              </div>
            `)
            .join('')}
        </body>
      </html>
    `;

    const blob = new Blob([chatHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-export-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: 'Chat exported',
      description: 'Your chat has been saved as an HTML file (open in browser to print as PDF).',
    });
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={exportAsText}
        disabled={state.messages.length === 0}
      >
        Export as Text
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={exportAsPDF}
        disabled={state.messages.length === 0}
      >
        Export as HTML
      </Button>
    </div>
  );
};

export default ChatExport;
