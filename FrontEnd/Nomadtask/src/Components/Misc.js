export const getFormValues = () =>{
    let formData = {}
    const formElem = document.querySelector('form')
    let inputElements = formElem.querySelectorAll('input')
    inputElements.forEach((input,inputID)=>{
        formData[input.name] = input.value
    })

    return(formData)
}

export const returnPercentage = (amount,percent) =>{
    return((amount/100)*percent)
}

export const getAdvancedFormValues = () =>{
  let formData = {}
  const formElem = document.querySelector('form')
  let inputElements = formElem?.querySelectorAll('input, select,textarea')
  inputElements?.forEach((input,inputID)=>{
    if (input.type === 'radio' && input.checked) {
        formData[input.name] = input.value;
    }else if (input.type === 'file') {
        formData[input.name] = input.files[0];
    }else if (input.type !== 'radio') {
        formData[input.name] = input.value;
    }else {
        //
    }
    
  })

  return(formData)
}

export const logOut = () =>{
    localStorage.clear();
    window.location.href = '/';
    
}


export const taskType =(type)=>{
    if (type === 'download') {
        return('Download / Activities')
    }else if (type === 'channel_boost') {
        return('Channel Boost')
    } else if (type === 'review') {
        return('Social / Blog Review')
    }else if (type === 'survey') {
        return('Survey')
    }else{
        return('Custom Task')
    }
}

export const taskTypeImages =(type)=>{
    if (type === 'download') {
        return('download_task.svg')
    }else if (type === 'channel_boost') {
        return('channel_boost.svg')
    } else if (type === 'review') {
        return('social_task.svg')
    }else if (type === 'survey') {
        return('survey-icon.svg')
    }else{
        return('custom_task.svg')
    }
}

export const taskTypeColors =(type)=>{
    if (type === 'download') {
        return('#9013fe')
    }else if (type === 'channel_boost') {
        return('#fc6f6f')
    } else if (type === 'review') {
        return('#0ab06a')
    }else if (type === 'survey') {
        return('#f5a623')
    }else{
        return('#007aff')
    }
}

export const TrustColors =(reward_ratio)=>{
    if (reward_ratio === 1.0) {
        return('#0ab06a')
    }else if (reward_ratio === 0.8) {
        return('#73b99b')
    } else if (reward_ratio === 0.6) {
        return('#98c8ff')
    }else if (reward_ratio === 0.4) {
        return('#ff9f00')
    }else {
        return('#f5222d')
    }
}

export const TrustColorsPercentage =(trust_score)=>{
    let result = 410
    if (trust_score) {
        result = 410 - ((410 * trust_score)/100)
    }
    
    return(result)
}



export const TrustEmoji =(reward_ratio)=>{
    if (reward_ratio === 1.0) {
        return(<img src="/Images/poll-yes.svg" alt="" className='w-full h-full' />)
    }else if (reward_ratio === 0.8) {
        return(<img src="/Images/trust-neutral.svg" alt="" className='w-full h-full' />)
    } else if (reward_ratio === 0.6) {
        return(<img src="/Images/trust-neutral.svg" alt="" className='w-full h-full' />)
    }else if (reward_ratio === 0.4) {
        return(<img src="/Images/trust-bad.svg" alt="" className='w-full h-full' />)
    }else {
        return(<img src="/Images/poll-no.svg" alt="" className='w-full h-full' />)
    }
}
