import reducer from '../../reducers/locksReducer'
import { SET_LOCK } from '../../actions/lock'

describe('locks reducer', () => {

  const lock = {
    address: '0x123',
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should add the lock when receiving SET_LOCK and if it was not there yet', () => {
    expect(reducer(undefined, {
      type: SET_LOCK,
      lock,
    })).toEqual([lock])
  })

  it('should not add the lock twice even when receiving SET_LOCK again', () => {
    expect(reducer([lock], {
      type: SET_LOCK,
      lock,
    })).toEqual([lock])

  })

})
