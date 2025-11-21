import { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "旅人 A",
      destination: "沖繩",
      message: "超喜歡這裡的海跟悠閒的氛圍～",
      time: "2025-11-19 14:30",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert("請輸入暱稱和留言內容！");
      return;
    }

    const now = new Date();
    const timeStr = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(
      now.getHours()
    ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      destination: destination.trim(),
      message: message.trim(),
      time: timeStr,
    };

    setComments([newComment, ...comments]);
    // 清空表單
    setMessage("");
    setDestination("");
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Travel Memories 旅遊留言牆</h1>
          <p>分享你在世界各地的旅行故事，留下美好的足跡 </p>
        </div>
      </header>

      <main className="main">
        <section className="card card-form">
          <h2>留下你的旅遊回憶</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
              <div className="form-group">
                <label>暱稱 *</label>
                <input
                  type="text"
                  placeholder="例如：小明、旅人 M..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>旅遊地點（可選）</label>
                <input
                  type="text"
                  placeholder="例如：東京、巴黎、台東..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>留言內容 *</label>
              <textarea
                rows={4}
                placeholder="分享你的旅遊心得、推薦的景點或美食吧！"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary">
              送出留言
            </button>
          </form>
        </section>

        <section className="card card-list">
          <h2>旅遊留言分享</h2>
          {comments.length === 0 ? (
            <p className="empty-text">還沒有留言，成為第一個分享旅遊故事的人吧！</p>
          ) : (
            <ul className="comment-list">
              {comments.map((c) => (
                <li key={c.id} className="comment-item">
                  <div className="comment-header">
                    <span className="comment-name">{c.name}</span>
                    {c.destination && (
                      <span className="comment-destination">
                        {c.destination}
                      </span>
                    )}
                  </div>
                  <p className="comment-message">{c.message}</p>
                  <div className="comment-footer">
                    <span className="comment-time">{c.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="footer">
        41371112H 蔡欣育 · 旅遊主題留言板
      </footer>
    </div>
  );
}

export default App;
