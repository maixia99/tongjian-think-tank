import React, { useState } from 'react';

function App() {
  const [prediction, setPrediction] = useState(null);

  const handleSimulate = () => {
    // 模拟名实辨析逻辑
    const data = {
      projections: [
        { type: "系统性崩溃", probability: "70%", description: "检测到名实背离（类似王安石变法）。" },
        { type: "共识化解", probability: "15%", description: "若能刺破信息茧房可逆转。" }
      ],
      advice: "建议加强'教化协同'。"
    };
    setPrediction(data);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'serif', backgroundColor: '#f5f5dc', minHeight: '100vh' }}>
      <h1 style={{ color: '#5d4037' }}>🏛️ 通鉴智库 1.0</h1>
      <p><i>"名正则言顺，言顺则事成。"</i></p>
      <button onClick={handleSimulate} style={{ padding: '10px', cursor: 'pointer' }}>启动结局推演</button>
      {prediction && (
        <div style={{ marginTop: '20px', background: 'white', padding: '15px' }}>
          <h3>🔮 未来概率云图</h3>
          {prediction.projections.map((p, i) => (
            <p key={i}><b>{p.type}</b>: {p.description}</p>
          ))}
          <p style={{ color: 'red' }}>{prediction.advice}</p>
        </div>
      )}
    </div>
  );
}
export default App;