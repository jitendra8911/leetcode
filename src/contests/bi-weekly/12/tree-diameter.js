/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function(edges) {
    let vertices = [];
    let graph = new Graph();
    for (let i = 0; i < edges.length; i++) {
        if (!vertices.includes(edges[i][0])){
            vertices.push(edges[i][0]);
            graph.addVertex(edges[i][0]);
        } 
        if (!vertices.includes(edges[i][1])){
            vertices.push(edges[i][1]);
            graph.addVertex(edges[i][1]);
        } 
        graph.addEdge(edges[i][0], edges[i][1]);
        graph.addEdge(edges[i][1], edges[i][0]);
    }
    
    let longestDiameterA = graph.dfs(vertices[0], 0, 0, null);
    graph.resetVisited(vertices);
    let longestDiameterB = graph.dfs(longestDiameterA.endVertex, 0, 0, null);
    
    return longestDiameterB.greatestPath;
    
};

class Graph {
    constructor() {
        this.adjacencyList = new Map();
        this.inputMap = new Map();
    }

    addVertex(vertex) {
        const node = new GraphNode(vertex);
        this.inputMap.set(vertex, node);
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertexA, vertexB) {
        const nodeB = this.inputMap.get(vertexB);
        this.adjacencyList.get(vertexA).push(nodeB);
    }

    dfs(vertex, currentPath, greatestPath, endVertex) {
        const node = this.inputMap.get(vertex);
        if (node == null) return 0;
        node.visited = true;
        let adjList = this.adjacencyList.get(vertex);
        if (adjList.filter(node => !node.visited).length === 0) {
            if (currentPath > greatestPath) {
                greatestPath = currentPath;
                endVertex = vertex;
            }
            return {greatestPath, endVertex};
        }

        for (let i = 0; i < adjList.length; i++) {
            if (!adjList[i].visited) {
                ({greatestPath, endVertex} = this.dfs(adjList[i].item, currentPath + 1, greatestPath, endVertex));
            }
        }
        return { greatestPath, endVertex };
    }

    resetVisited(vertices) {
        vertices.forEach(vertex => {
            const node = this.inputMap.get(vertex);
            node.visited = false;
        });
    }
}

class GraphNode {
    constructor(item) {
        this.item = item;
    }
}


console.log(treeDiameter([[0,1],[1,2],[2,3],[1,4],[4,5]]));