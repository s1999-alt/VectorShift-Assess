import { Handle, Position, useReactFlow } from "reactflow";

export default function BaseNode({
    id,
    title,
    inputs = [],
    outputs = [],
    children,
    width = 220,
}) {
    const { deleteElements } = useReactFlow();

    const handleDelete = () => {
        deleteElements({ nodes: [{ id }] });
    };

    return (
        <div className="node" style={{ width }}>
            <div className="node-header">
                <span>{title}</span>
                <button
                    onClick={handleDelete}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontSize: '16px',
                        padding: '0 4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px',
                        transition: 'color 0.2s',
                    }}
                    className="node-close-btn"
                    onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                    ×
                </button>
            </div>

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