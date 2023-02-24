import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'

export default function ColumnSwitch({setSelectcolumn}) {
  const [enabled, setEnabled] = useState(false)
  useEffect(()=>{
    if (enabled){
      setSelectcolumn('double')
    } else {
      setSelectcolumn('single')
    }
  },[enabled])
  return (
    <div className="py-16">
    <h2 className='text-bold'>Split the page</h2>
    <Switch.Group>
      <Switch.Label>Single</Switch.Label>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-blue-900' : 'bg-blue-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Switch.Label>Double</Switch.Label>
      </Switch.Group>
    </div>
  )
}
