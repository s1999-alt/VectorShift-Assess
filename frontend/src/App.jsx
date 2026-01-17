import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { PipelineToolbar } from './PipelineToolbar';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
