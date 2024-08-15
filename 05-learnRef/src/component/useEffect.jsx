import { useEffect } from 'react';
import { createConnection } from './chat.js';

export default function ChatRoom() {
  console.log('2');
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => {
      connection.disconnect();
      console.log('1');
    };
  }, []);
  return <h1>채팅에 오신걸 환영합니다!</h1>;
}
