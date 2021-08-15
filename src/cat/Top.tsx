import { useDispatch, useSelector } from 'react-redux';
import getCatAction from './getCatAction';
import { RootState } from './store';
import Link from './Link';

const Top = () => {
  const dispatch = useDispatch()
  const buttonAlert = () => {
    dispatch(getCatAction())
  }

  const state = useSelector((state:RootState) => state.getCatReducer)

  return (
    <div>
      <p>Cats rule the world.</p>
      <button onClick={buttonAlert}>get cat</button>
      <br/>
      <label>{state.status}</label>
      <br/>
      <label>{state.url}</label>
      <br/>
      <Link url={state.url} />
    </div>
  )
}

export default Top;