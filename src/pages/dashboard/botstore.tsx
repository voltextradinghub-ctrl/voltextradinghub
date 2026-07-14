import React from 'react';

const FreeBots = () => {
    return (
        <div style={{ padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '8px' }}>🤖 Free Trading Bots</h2>
            <p style={{ color: '#666', marginBottom: '24px' }}>Select a pre-built automated bot to run instantly on your connected Deriv account.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {/* Bot Card 1 */}
                <div style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginTop: 0, color: '#ff4444' }}>🚀 Volatility 100 Rise/Fall</h3>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>Automatically buys Rise contracts when a 3-tick uptrend is detected on Volatility 100 Index.</p>
                    <button style={{ backgroundColor: '#ff4444', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', width: '100%', fontWeight: 'bold', marginTop: '12px' }}>Run Bot</button>
                </div>

                {/* Bot Card 2 */}
                <div style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginTop: 0, color: '#2196F3' }}>🔢 Digit Even/Odd Bot</h3>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>Analyzes the last digit of market ticks and trades automatically based on repeating patterns.</p>
                    <button style={{ backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', width: '100%', fontWeight: 'bold', marginTop: '12px' }}>Run Bot</button>
                </div>
            </div>
        </div>
    );
};

export default FreeBots;
