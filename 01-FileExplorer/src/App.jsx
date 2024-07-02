import { useState } from "react";
import explorer from "./constant/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const { insertNode, deleteNode, updateNode } = useTraverseTree();
  const [explorerData, setExplorerData] = useState(explorer);

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (nodeId) => {
    const finalTree = deleteNode(explorerData, nodeId);
    setExplorerData(finalTree);
  };

  const handleUpdateNode = (nodeId, newName) => {
    const finalTree = updateNode(explorerData, nodeId, newName);
    setExplorerData(finalTree);
  };

  return (
    <Folder 
      handleInsertNode={handleInsertNode} 
      handleDeleteNode={handleDeleteNode}
      handleUpdateNode={handleUpdateNode}
      explorer={explorerData} 
    />
  );
}

export default App;
