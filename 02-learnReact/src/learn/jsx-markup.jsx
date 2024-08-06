import ConditionalDisplay from './conditional-display';
import ConditionalRendering from './conditional-rendering';
import DataBinding from './data-binding';
import RenderLists from './list-rendering';
import * as learnData from '../data/learn';

function JSX_Markup() {
  const { statusMessage } = learnData;
  return (
    <dl className="descriptionList">
      <DataBinding statusMessages={statusMessage} />
      <ConditionalRendering />
      <ConditionalDisplay />
      <RenderLists />
    </dl>
  );
}

export default JSX_Markup;
