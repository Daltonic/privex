import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState } = createGlobalState({
  modal: false,
})

export { useGlobalState, setGlobalState }
