import { useState } from 'react';

const Folder = ({ handleInsertNode, handleDeleteNode, handleUpdateNode, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [editInput, setEditInput] = useState('');
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });

  const handleClick = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setEditInput('');
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };

  const addOnFolder = (e) => {
    setEditInput(e.target.value);
    if (e.keyCode === 13 && editInput) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({
        ...showInput,
        isVisible: false,
      });
    }
  };

  const editOnFolder = (e, isFolder) => {
    e.stopPropagation();
    setEditInput(explorer.name);
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorer.id);
  };

  const handleUpdate = (e) => {
    setEditInput(e.target.value);
    if (e.keyCode === 13 && editInput) {
      handleUpdateNode(explorer.id, editInput);
      setShowInput({
        ...showInput,
        isVisible: false,
      });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className='folder' onClick={() => setExpand(!expand)}>
          <span>🗂{explorer.name}</span>
          <div>
            <button onClick={(e) => handleClick(e, true)}>Folder +</button>
            <button onClick={(e) => handleClick(e, false)}>File +</button>
            <button onClick={(e) => handleDelete(e)}>Delete</button>
          </div>
        </div>
        <div style={{ display: expand ? 'block' : 'none', paddingLeft: 8 }}>
          {showInput.isVisible && (
            <div className='inputContainer'>
              <span>{showInput.isFolder ? '🗂' : '📁'}</span>
              <input
                onKeyDown={(e) => addOnFolder(e)}
                className='inputContainer__input'
                type='text'
                autoFocus
                onBlur={() => setShowInput({ ...showInput, isVisible: false })}
              />
            </div>
          )}
          {explorer.items.map((item) => (
            <Folder
              handleInsertNode={handleInsertNode}
              handleDeleteNode={handleDeleteNode}
              handleUpdateNode={handleUpdateNode}
              explorer={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {showInput.isVisible ? (
          <div className='inputContainer'>
            <span>{showInput.isFolder ? '🗂' : '📁'}</span>
            <input
              onKeyDown={(e) => handleUpdate(e)}
              className='inputContainer__input'
              type='text'
              value={editInput}
              autoFocus
              onBlur={() => setShowInput({ ...showInput, isVisible: false })}
              onChange={(e) => setEditInput(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <span onClick={(e) => editOnFolder(e, false)} className='file'>📁{explorer.name}</span>
            <button onClick={(e) => handleDelete(e)}>Delete</button>
          </div>
        )}
      </div>
    );
  }
};

export default Folder;
