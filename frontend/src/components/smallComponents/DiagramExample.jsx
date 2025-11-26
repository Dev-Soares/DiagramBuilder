import  {  useCallback,  } from 'react';
import { ReactFlow, Background,  useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '../../assets/reactflow.css';
import ExampleNode from './ExampleNode';

const nodeTypes = {
    customNode: ExampleNode,
};

const DiagramExample = () => {

    const [nodes, setNodes, onNodesChange] = useNodesState([
        {
            id: 'cloud-1',
            type: 'customNode',
            position: { x: 350, y: 120 },
            data: {
                label: 'Cloud',
                icon: 'cloud',
                color: '#8957e5',
            },
        },
        {
            id: 'database-1',
            type: 'customNode',
            position: { x: 200, y: 320 },
            data: {
                label: 'Database',
                icon: 'database',
                color: '#79a013',
            },
        },
        {
            id: 'api-1',
            type: 'customNode',
            position: { x: 500, y: 490 },
            data: {
                label: 'API',
                icon: 'api',
                color: '#FF7300',
            },
        },
        {
            id: 'web-1',
            type: 'customNode',
            position: { x: 200, y: 660 },
            data: {
                label: 'Web',
                icon: 'monitor',
                color: '#0078D4',
            },
        },
        {
            id: 'users-1',
            type: 'customNode',
            position: { x: 500, y: 830 },
            data: {
                label: 'Users',
                icon: 'group',
                color: '#c925d1',
            },
        },
    ]);

    const [edges, setEdges, onEdgesChange] = useEdgesState([
        {
            id: 'edge-1',
            source: 'cloud-1',
            target: 'database-1',
            animated: true,
        },
        {
            id: 'edge-2',
            source: 'database-1',
            target: 'api-1',
            animated: true,
        },
        {
            id: 'edge-3',
            source: 'api-1',
            target: 'web-1',
            animated: true,
        },
        {
            id: 'edge-4',
            source: 'web-1',
            target: 'users-1',
            animated: true,
        },
        {
            id: 'edge-5',
            source: 'cloud-1',
            target: 'api-1',
            animated: true,
        }
    ]);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <div className="w-full h-120 md:w-[50%] lg:w-full xl:w-[70%] 2xl:w-[50%] rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg bg-neutral-50">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                fitViewOptions={{
                    padding: 0.2,
                    minZoom: 0.5,
                    maxZoom: 1.5,
                }}
                minZoom={0.3}
                maxZoom={2}
                defaultEdgeOptions={{
                    animated: true,
                }}
                nodesDraggable={true}
                nodesConnectable={false}
                elementsSelectable={true}
                panOnDrag={true}
                preventScrolling={true}    
                nodeOrigin={[0.5, 0.5]}
                viewport={{x:0, y:0, zoom: 0.5}}
            >
                <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
        </div>
    );
};

export default DiagramExample;
