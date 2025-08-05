import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  timestamp: Date;
  sender: 'user' | 'support';
  status?: 'sent' | 'delivered' | 'read';
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Привет! 👋 Я готов помочь с любыми вопросами. Что вас интересует?',
      timestamp: new Date(),
      sender: 'support'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [showUserForm, setShowUserForm] = useState(true);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      timestamp: new Date(),
      sender: 'user',
      status: 'sent'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Симуляция отправки в службу поддержки
    toast({
      title: "Сообщение отправлено!",
      description: "Мы получили ваш вопрос и скоро ответим.",
    });

    // Симуляция автоответа
    setTimeout(() => {
      const autoReply: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Спасибо за ваш вопрос! Наша команда поддержки получила сообщение и ответит в течение нескольких минут. 🚀',
        timestamp: new Date(),
        sender: 'support'
      };
      setMessages(prev => [...prev, autoReply]);
    }, 1500);
  };

  const handleUserInfoSubmit = () => {
    if (!userInfo.name || !userInfo.email) {
      toast({
        title: "Заполните поля",
        description: "Пожалуйста, укажите имя и email для связи.",
        variant: "destructive"
      });
      return;
    }
    setShowUserForm(false);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Кнопка открытия чата */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      )}

      {/* Окно чата */}
      {isOpen && (
        <Card className="w-80 h-96 shadow-2xl border-0 bg-white">
          <CardHeader className="bg-primary text-primary-foreground p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="Headphones" size={20} />
                <CardTitle className="text-sm">Поддержка</CardTitle>
                <Badge variant="secondary" className="text-xs bg-green-500 text-white">
                  Онлайн
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-80">
            {/* Форма пользователя */}
            {showUserForm && (
              <div className="p-4 border-b bg-muted/30">
                <p className="text-sm text-muted-foreground mb-3">
                  Представьтесь для начала диалога:
                </p>
                <div className="space-y-2">
                  <Input
                    placeholder="Ваше имя"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="h-8"
                  />
                  <Input
                    placeholder="Email для связи"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="h-8"
                  />
                  <Button onClick={handleUserInfoSubmit} className="w-full h-8">
                    Начать чат
                  </Button>
                </div>
              </div>
            )}

            {/* Сообщения */}
            {!showUserForm && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-2 ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          {formatTime(message.timestamp)}
                          {message.sender === 'user' && message.status && (
                            <span className="ml-1">
                              {message.status === 'sent' && '✓'}
                              {message.status === 'delivered' && '✓✓'}
                              {message.status === 'read' && '✓✓'}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Поле ввода */}
                <div className="p-4 border-t bg-muted/30">
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Напишите ваш вопрос..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      className="min-h-[40px] max-h-20 resize-none"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim()}
                      className="h-10 px-3"
                    >
                      <Icon name="Send" size={16} />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter для отправки, Shift+Enter для новой строки
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChatWidget;