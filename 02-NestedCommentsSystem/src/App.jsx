import NestedComments from './components/NestedComments';
import commentsData from './constant/comment.json';

function App() {

  return (
    <div>
      <h1>Nested Comment System</h1>
      <NestedComments 
        comments={commentsData}
        onSubmit={(content)=>{}}
        onEdit={(content)=>{}}
        onDelete={()=>{}}
        // onUpVote={()=>{}}
        // onDownVote={()=>{}}
      />
    </div>
  )
}

export default App
