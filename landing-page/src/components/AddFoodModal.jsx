import React from 'react';

export default function AddFoodModal({ show, onClose, onSave }) {
  if (!show) return null;
  return (
    <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.4)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000}}>
      <div style={{background:'#fff', padding:20, borderRadius:8, width:360}}>
        <h3 style={{marginTop:0}}>Add Food (stub)</h3>
        <div style={{display:'flex', gap:8, justifyContent:'flex-end'}}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => { onSave && onSave(); onClose && onClose(); }}>Save</button>
        </div>
      </div>
    </div>
  );
}


