// textNode.js
import { useState, useEffect, useRef } from 'react';
import BaseNode from '../BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  // Parse variables for handles
  useEffect(() => {
    // Regex to match {{ variableName }}
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)];
    // Create handles from matches. De-duplicate if needed, but for now simple map.
    const uniqueVars = [...new Set(matches.map(m => m[1]))];
    const newHandles = uniqueVars.map(variable => ({ id: `${id}-${variable}` }));
    setHandles(newHandles);
  }, [currText, id]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      title="Text"
      inputs={handles}
      outputs={[{ id: `${id}-output` }]}
    >
      <label style={{ display: 'block', width: '100%' }}>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          rows={1}
          style={{
            width: '100%',
            minHeight: '30px',
            resize: 'none',
            overflow: 'hidden',
            boxSizing: 'border-box',
            fontFamily: 'inherit',
            fontSize: 'inherit'
          }}
        />
      </label>
    </BaseNode>
  );
}