// import React from 'react'

// function formfield() {
//   return (
//     <div>formfield</div>
//   )
// }

// export default formfield

import React, { useState } from 'react'

const FormInput = (props) => {
  const { onChange, errorMsg, id, ...inputProps } = props
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} className="input-field" />
      <span className=' error-msg text-center'>{errorMsg}</span>
    </div>
  )
}

export default FormInput 