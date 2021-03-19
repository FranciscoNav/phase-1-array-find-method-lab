
  
function superbowlWin(record) {
    const result = record.find(function (element) {
        return element.result === 'W'
      }
      )  
      if (result){ return result.year}
      else { return undefined}
}


  
  
  