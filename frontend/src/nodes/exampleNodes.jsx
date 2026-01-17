// exampleNodes.jsx
import { useState } from 'react';
import BaseNode from '../BaseNode';

export const DateNode = ({ id, data }) => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    return (
        <BaseNode id={id} title="Date" outputs={[{ id: `${id}-date` }]}>
            <label>
                Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
        </BaseNode>
    );
};

export const NoteNode = ({ id, data }) => {
    const [note, setNote] = useState(data?.note || '');
    return (
        <BaseNode id={id} title="Note" width={200}>
            <label>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={4}
                    style={{ width: '100%', resize: 'none' }}
                />
            </label>
        </BaseNode>
    );
};

export const FilterNode = ({ id, data }) => {
    const [field, setField] = useState(data?.field || '');
    return (
        <BaseNode
            id={id}
            title="Filter"
            inputs={[{ id: `${id}-in` }]}
            outputs={[{ id: `${id}-out` }]}
        >
            <label>
                Field:
                <input type="text" value={field} onChange={(e) => setField(e.target.value)} />
            </label>
        </BaseNode>
    );
};

export const TransformNode = ({ id, data }) => {
    const [transformType, setTransformType] = useState(data?.transformType || 'uppercase');
    return (
        <BaseNode
            id={id}
            title="Transform"
            inputs={[{ id: `${id}-in` }]}
            outputs={[{ id: `${id}-out` }]}
        >
            <label>
                Transform:
                <select value={transformType} onChange={(e) => setTransformType(e.target.value)}>
                    <option value="uppercase">Uppercase</option>
                    <option value="lowercase">Lowercase</option>
                    <option value="trim">Trim</option>
                </select>
            </label>
        </BaseNode>
    );
};

export const APINode = ({ id, data }) => {
    const [url, setUrl] = useState(data?.url || 'https://api.example.com');
    return (
        <BaseNode
            id={id}
            title="API Call"
            inputs={[{ id: `${id}-trigger` }]}
            outputs={[{ id: `${id}-response` }, { id: `${id}-error` }]}
            width={250}
        >
            <label>
                URL:
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            </label>
        </BaseNode>
    );
};
