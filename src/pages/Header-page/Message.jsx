import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';

const LOCAL_STORAGE_KEY = 'freelancer_notifications';

const Message = () => {
  const [notifications, setNotifications] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const freelancerId = decoded.jti;

      const ws = new WebSocket(`ws://192.168.0.200:3031/ws?userId=${freelancerId}`);

      ws.onopen = () => {
        console.log('✅ WebSocket connected');
        setLoading(false);
      };

      ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          console.log("📩 Notification received:", message);
          setNotifications((prev) => {
            const updated = [...prev, message];
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
            return updated;
          });
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

      return () => {
        ws.close();
      };
    } catch (error) {
      console.error('❌ Token decode error:', error);
      setLoading(false);
    }
  }, []);

  const handleLinkClick = (fullUrl) => {
    if (!fullUrl) return;
    try {
      const url = new URL(fullUrl);
      const internalPath = url.pathname + url.search;
      navigate(internalPath);
    } catch (err) {
      console.error("❌ Invalid URL:", err);
    }
  };

  const handleDeleteAll = () => {
    setNotifications([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const handleDeleteOne = (index) => {
    const updated = notifications.filter((_, i) => i !== index);
    setNotifications(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
        {notifications.length > 0 && (
          <button
            onClick={handleDeleteAll}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
          >
            Delete All
          </button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md h-[600px] overflow-y-auto p-4">
        {notifications.length === 0 ? (
          <p className="text-center text-gray-500">No notifications yet.</p>
        ) : (
          notifications.map((msg, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <div className="flex justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-700">{msg.title}</div>
                  <div className="text-gray-800">{msg.message}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    From: {msg.senderName} | {new Date(msg.timestamp).toLocaleString()}
                  </div>
                </div>
                <Button
                  onClick={() => handleDeleteOne(index)}
                  color='red'
                  variant='outline'
                >
                  Delete
                </Button>
              </div>
              {msg.link && (
                <button
                  onClick={() => handleLinkClick(msg.link)}
                  className="text-blue-600 text-sm hover:underline mt-1 inline-block"
                >
                  View Details
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Message;