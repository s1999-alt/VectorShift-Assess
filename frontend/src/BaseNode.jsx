import { Handle, Position } from "reactflow";

export default function BaseNode({
    title,
    inputs = [],
    outputs = [],
    children,
    width = 220,
}) {

  return (
      <div className="node" style={{ width }}>
          <div className="node-header">{title}</div>

          {inputs.map((input, index) => (
              <Handle
                  key={input.id}
                  type="target"
                  position={Position.Left}
                  id={input.id}
                  style={{ top: `${(index + 1) * (100 / (inputs.length + 1))}%` }}
              />
          ))}

          <div className="node-body">{children}</div>

          {outputs.map((output, index) => (
              <Handle
                  key={output.id}
                  type="source"
                  position={Position.Right}
                  id={output.id}
                  style={{ top: `${(index + 1) * (100 / (outputs.length + 1))}%` }}
              />
          ))}
      </div>
  );
}