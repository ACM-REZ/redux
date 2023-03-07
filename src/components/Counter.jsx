import { useSelector, useDispatch } from 'react-redux';
import CounterSelector from '../selectors/index';
import { counterUp, counterDown } from '../reducers/app/actions';

export default () => {
    const {counter} = useSelector(CounterSelector),
          dispatch = useDispatch();

    return (
        <>
            <h1 className='text-3xl'>{counter}</h1>
            <button 
            className="bg-slate-300 rounded-full px-4 py-1 w-[100px] h=[40px]"
            onClick={() => dispatch(counterUp())}
            >+</button>
            <button 
            className="bg-slate-300 rounded-full px-4 py-1 w-[100px] h=[40px]"
            onClick={() => dispatch(counterDown())}
            >-</button>
        </>
    )
}