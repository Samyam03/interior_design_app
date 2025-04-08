import React from 'react'
import { Textarea } from "@/components/ui/textarea"

function AdditionalRequirements({ additionalRequirementInput }) {
  return (
    <div className='mt-5'>
        <label>Additional Requirements</label>
        <Textarea 
          placeholder="Add any additional requirements or preferences you have for the design." 
          className="mt-2" 
          onChange={(event) => { additionalRequirementInput(event.target.value); }} 
        />
        <p className='text-slate-600 text-sm mt-2'>*Optional</p>
    </div>
  )
}

export default AdditionalRequirements