import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const Message = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const freelancerId = decoded.jti;
      // console.log("Decoded token:", decoded);

      console.log("Connecting WebSocket for freelancerId:", freelancerId);

      // ✅ Corrected query param to match backend's userId=
      const ws = new WebSocket(`ws://172.20.10.2:3031/ws?userId=${freelancerId}`);

      ws.onopen = () => {
        console.log('✅ WebSocket connected');
        setLoading(false);
      };

      ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          console.log("📩 Notification received:", message);
          setNotifications(prev => [...prev, message]);
        } catch (err) {
          console.error("❌ Failed to parse message:", err);
        }
      };

      ws.onerror = (error) => {
        console.error('❌ WebSocket error:', error);
        setLoading(false);
      };

      ws.onclose = () => {
        console.log('🔌 WebSocket disconnected');
      };

      // Clean up
      return () => {
        ws.close();
      };
    } catch (error) {
      console.error('❌ Token decode error:', error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md h-[600px] overflow-y-auto p-4">
        {notifications.length === 0 ? (
          <p className="text-center text-gray-500">No notifications yet.</p>
        ) : (
          notifications.map((msg, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <div className="text-sm font-semibold text-gray-700">{msg.title}</div>
              <div className="text-gray-800">{msg.message}</div>
              <div className="text-xs text-gray-500 mt-1">
                From: {msg.senderName} | {new Date(msg.timestamp).toLocaleString()}
              </div>
              {msg.link && (
                <a
                  href={msg.link}
                  className="text-blue-600 text-sm hover:underline mt-1 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Message;