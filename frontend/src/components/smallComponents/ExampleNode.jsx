import { Handle, Position } from '@xyflow/react';

const ExampleNode = ({ id, data, isConnectable }) => {
    const icon = data?.icon
    const label = data?.label ?? 'Unnamed';
    const color = data?.color ?? '#FFFFFF';

    return (
        <div className='p-4 rounded-xl shadow-md flex flex-col items-center gap-2 min-w-40 border-2 border-gray-200'
            style={{ backgroundColor: color }}>
            <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
            <div className='h-16 w-16 flex items-center justify-center material-symbols-outlined text-6xl! text-white'>
                {icon}
            </div>
            <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
            <div className={`font-semibold text-center text-md ${color !== '#FFFFFF' ? 'text-white' : 'text-black'}`}>{label}</div>
        </div>
    );
};

export default ExampleNode;