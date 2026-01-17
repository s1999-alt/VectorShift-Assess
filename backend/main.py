from fastapi import FastAPI, Form
from pydantic import BaseModel
from typing import List, Dict, Any
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: PipelineData):
    nodes = pipeline.nodes
    edges = pipeline.edges
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    adj_list = {node['id']: [] for node in nodes}
    for edge in edges:
        source = edge['source']
        if source in adj_list:
            adj_list[source].append(edge['target'])
            
    is_dag = True
    visited = set()
    recursion_stack = set()
    
    def has_cycle(node_id):
        visited.add(node_id)
        recursion_stack.add(node_id)
        
        if node_id in adj_list:
            for neighbor in adj_list[node_id]:
                if neighbor not in visited:
                    if has_cycle(neighbor):
                        return True
                elif neighbor in recursion_stack:
                    return True
                    
        recursion_stack.remove(node_id)
        return False
        
    for node in nodes:
        if node['id'] not in visited:
            if has_cycle(node['id']):
                is_dag = False
                break
                
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
