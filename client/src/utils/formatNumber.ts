export function formatNumber(number:number){
    if(number > 1000 && number < 1000000){
     return (number / 1000).toLocaleString('en-US',{maximumFractionDigits:1}) + 'K'
    }
    if(number > 1000000 && number < 1000000000){
     return (number / 1000000).toLocaleString('en-US',{maximumFractionDigits:1}) + 'M'
    
    }
    if(number > 1000000000){
     return (number / 1000000000).toLocaleString('en-US',{maximumFractionDigits:1}) + 'B'
    
    }
      }